import React, { useState, useEffect, useCallback } from "react";

import { themeCtx } from "../../context/ThemeContext";
import URL_SERVER from "../../services/routes";
import { routes } from "../../services/routes";
import { storageData } from "../../utils/storageData";
import { useGetStoreData } from "../../hooks/useGetStoreData";

import { Modal, ModalDashboard, NavBar } from "../../components/molecules";
import {
  AuthCard,
  BigText,
  ButtonIcon,
  InputCheck,
  SmallText,
  Text,
} from "../../components/atoms";
import { GoUpload, GoLink } from "react-icons/go";
import { FaTextSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/getUser";

const Uploadpage = () => {
  // theme context
  const darkCtx = themeCtx();

  // useNavigate
  const navigate = useNavigate();

  // fetch data states
  const [files, setFiles] = useState([]);
  const [erreur, setErreur] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState("");
  const [statistic, setStatistic] = useState();

  // ui states
  const [textUnique, setTextUnique] = useState(0);
  const [pourcentLoader, setPourcentLoader] = useState(0);
  const [currentOperation, setCurrentOperation] = useState(
    "Document processing ..."
  );
  const [textPlagie, setTextPlagie] = useState(0);
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);

  // custom hook
  let results = useGetStoreData("result");
  const userData = useGetStoreData("user");
  const userToken = useGetStoreData("token");
  // const [user, setUser] = useState({});
  let resData;
  const [userCredit, setUserCredit] = useState(userData ? userData.credit : 0);

  // // get user by Id
  // const getUserHandler = useCallback(async () => {
  //   try {
  //     if (userToken) {
  //       const response = await getUser(userData.id, userToken);
  //       console.log(response);
  //       userCredit = response.data.credit;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [userCredit]);

  // useEffect(() => {
  //   getUserHandler();
  // }, []);

  // useEffect(async () => {
  //   try {
  //     if (userToken) {
  //       const response = await getUser(userData.id, userToken);
  //       console.log(response);
  //       userCredit = response.data.credit;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // checkPlagiarismHandler
  // general function for check plagiat
  const checkPlagiarismHandler = async () => {
    try {
      setShowModal(true);
      setTextUnique(0);
      setTextPlagie(0);
      setPourcentLoader(0);
      const response = await fetch(URL_SERVER + routes[1].path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({ text: results.text }),
      });
      const firstResult = await response.json();
      console.log(firstResult);
      //1.first action
      setPourcentLoader(50);
      setCurrentOperation("Plagiarism check ...");
      getResultplagiatHandler(
        results.text,
        firstResult.pdfFiles,
        routes[3].path
      );

      if (pourcentLoader > 70) {
        setPourcentLoader(100);
      } else {
        setPourcentLoader(pourcentLoader + 50);
      }

      // 2. second action
      setTimeout(async () => {
        getResultplagiatHandler(
          results.text,
          firstResult.pdfFiles,
          routes[2].path,
          userData.id,
          results.nbmot
        );
      }, 10000);
    } catch (e) {
      console.log(e);
      setErreur("Please check your connection and try again later");
      setShowModal(false);
    }
  };

  //getResultplagiatHandler
  const getResultplagiatHandler = async (
    text,
    firstResult,
    route,
    userId,
    nbmot
  ) => {
    try {
      const res = await fetch(URL_SERVER + route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
          pdfFiles: firstResult,
          text: text,
          userId: userId,
          nbmot: nbmot,
        }),
      });

      if (nbmot) {
        let newCredit = userCredit - nbmot;
        setUserCredit(newCredit);
        console.log(userCredit, nbmot);
      }

      const secondResult = await res.json();
      console.log(secondResult);
      if (route === "/getPlagiaDetail") {
        getStatistic(secondResult);
      } else {
        resultPlagiat(secondResult);
      }
    } catch (e) {
      console.log(e);
      setErreur("Please check your connection and try again later");
      setShowModal(false);
    }
  };

  // get statistic
  // get text unique, text plagié
  const getStatistic = (result) => {
    if (result) {
      setStatistic(result.similarityResults);
      storageData(result, "plagiatResult");
      console.log(result);
    }
  };

  // get result plagiat
  // get links of document sources
  const resultPlagiat = (result) => {
    if (result) {
      console.log(result);
      storageData(result, "references");
      navigate("/results");
      setShowModal(false);
    }
  };

  // 1. get metadata
  // get number of words, pages and text
  const getDataHandler = async (newData, jsonHeader) => {
    try {
      setIsLoading(true);
      console.log(newData);
      const response = await fetch(
        URL_SERVER + routes[0].path,

        routes[0].typeRequest === "POST" && jsonHeader
          ? {
              // json parameters
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + userToken,
              },
              body: newData,
            }
          : {
              // formdata parameters
              method: "POST",
              headers: { Authorization: "Bearer " + userToken },
              body: newData,
            }
      );
      const myData = await response.json();
      console.log(myData);
      resData = myData;
      storageData(resData, "result");
      setIsLoading(false);
      console.log("good response");
    } catch (err) {
      setErreur("Please check your connection and try again later");
      setIsLoading(false);
      console.log("bad response");
    }
  };

  //useffect for get metadata(number of words and pages)
  useEffect(() => {
    if (files && link.length === 0) {
      const data = new FormData();
      data.append("document", files[0]);
      console.log(files[0]);
      console.log("je suis un fichier");
      getDataHandler(data, false);
    } else if (link.length > 0 && files.length === 0) {
      console.log(link);
      console.log("je suis un lien");
      let currentLink = JSON.stringify({ link: link });
      getDataHandler(currentLink, true);
    } else {
      console.log("went something wrong");
    }
  }, [files, link]);

  // clear text handler
  const clearTextHandler = (e) => {
    setFiles([]);
    e.target.value = "";
    setLink("");
    setErreur(null);
  };

  // open file system
  const openFileSystem = () => {
    if (userToken) {
      document.querySelector(".fichier").click();
      setErreur(null);
    } else {
      setIsShowAuthModal(true);
    }
  };

  // text unique loaderHandler
  useEffect(() => {
    if (statistic) {
      const interval = setInterval(() => {
        setTextUnique(
          (parseInt(statistic.unique) * 100) / statistic.totalphrase
        );
        setTextPlagie(
          parseInt(statistic.plagiarized * 100) / statistic.totalphrase
        );
      }, 500);

      console.log(textUnique);
      return () => clearInterval(interval);
    } else {
      console.log("Impossible ce calculer");
    }
  }, [setTextUnique, setTextPlagie, statistic]);

  // linear loaderHandler
  useEffect(() => {
    let linearPourcent = 2500;

    if (pourcentLoader < 100) {
      // if (pourcentLoader > 40) {
      //   linearPourcent = Math.floor(Math.random() * (5000 - 4000) + 1);
      //   setCurrentOperation("Plagiarism check ...");
      // }
      // if (pourcentLoader > 70) {
      //   linearPourcent = Math.floor(Math.random() * (1000 - 800) + 1);
      // }
      const linearInterval = setInterval(() => {
        if (pourcentLoader > 99) {
          setPourcentLoader(100);
        }
        setPourcentLoader(pourcentLoader + 1);
      }, linearPourcent);

      return () => clearInterval(linearInterval);
    }
  }, [pourcentLoader, setPourcentLoader]);

  return (
    <React.Fragment>
      <div className={` ${darkCtx.isDark ? "text-white" : "text-gray-600"}`}>
        <NavBar />
        <div className="px-20 py-5">
          {/* buttons sections */}
          <div className="flex items-center justify-center gap-5 ">
            <ButtonIcon
              title="Check plagiarism"
              bg="bg-orange-600"
              diseable={true}
            />
            <ButtonIcon title="Paraphrasing" diseable={true} />
            <ButtonIcon title="Check Grammar" diseable={true} />
          </div>
          <div className="text-center  pt-5">
            <BigText title="The Most Accurate Plagiarism Checker" />
            <SmallText
              color="text-gray-400"
              title="Paste the content below and Get details & accurate results with the top-rated plagiarism checker"
            />
          </div>
          {/* Upload section */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-5/6 py-8 ">
              <div
                className={`h-[300px] w-full overflow-y-scroll text-center pt-12 ${
                  darkCtx.isDark
                    ? "bg-[#212121] "
                    : "bg-gray-200 border border-gray-300"
                }`}
              >
                <BigText title="Please upload your document" />
                <SmallText
                  title="Upload pdf, doc or txt document"
                  color="text-gray-400"
                />
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  className="hidden fichier"
                  type="file"
                  accept=".pdf, .docx, .txt"
                />
                {(files.length > 0 || link.length > 0) && (
                  <h1 className="text-center text-sm  pt-16">
                    {!isLoading ? (
                      <p className=" text-gray-600 px-12">
                        {erreur ? (
                          <span className="text-red-600">{erreur}</span>
                        ) : results.nbmot > userCredit ? (
                          <span>
                            Your document is too large, please change!
                          </span>
                        ) : (
                          results.text
                        )}
                      </p>
                    ) : (
                      <span>Verifying...</span>
                    )}
                    {/* {results.nbmot > 3000 && (
                      
                    )} */}
                  </h1>
                )}
              </div>
              {/* buttons box */}
              <div
                className={`flex items-center justify-between w-full py-1 px-2 border ${
                  darkCtx.isDark ? "border-[#212121]" : "border-gray-300"
                } `}
              >
                {/* first section buttons box */}
                <div className="flex items-center w-5/6 gap-3 ">
                  <ButtonIcon
                    title="Upload"
                    icon={<GoUpload size={20} />}
                    bg="bg-green-600"
                    onClick={openFileSystem}
                  />
                  <InputCheck
                    value={link}
                    onChange={(e) => {
                      setLink(e.target.value);
                      console.log(link);
                    }}
                    // ref={currentLink}
                    name="currentLink"
                    icon={<GoLink size={20} />}
                    placeholder="Check by URL"
                  />
                  <InputCheck
                    icon={<GoLink size={20} />}
                    placeholder="Exclude specific URL"
                  />
                </div>
                <ButtonIcon
                  icon={<FaTextSlash size={20} />}
                  size="px-4"
                  onClick={clearTextHandler}
                />
              </div>
              <div className="w-full">
                <Text>
                  <h1 className="text-start text-[12px] py-3">
                    Words{" "}
                    {(files.length > 0 || link.length > 0) &&
                    results.nbmot < userCredit &&
                    !erreur
                      ? results.nbmot
                      : "0"}
                    /{userCredit} |{" "}
                    {(files.length > 0 || link.length > 0) &&
                    results.nbmot < userCredit &&
                    !erreur
                      ? results.page
                      : "0"}{" "}
                    pages
                  </h1>
                </Text>
                <span className="flex justify-center">
                  <ButtonIcon
                    onClick={checkPlagiarismHandler}
                    title="Check plagiarism"
                    bg={
                      (files.length > 0 || link.length > 0) &&
                      results.nbmot < userCredit
                        ? "bg-orange-600"
                        : "bg-orange-400"
                    }
                    diseable={
                      (files.length > 0 || link.length > 0) &&
                      results.nbmot < userCredit
                        ? false
                        : true
                    }
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isShow={showModal}
        currentOperation={currentOperation}
        textUnique={textUnique}
        plagiatText={textPlagie}
        loading={pourcentLoader}
      />
      {isShowAuthModal && (
        <ModalDashboard
          card={
            <AuthCard closeModalHandler={() => setIsShowAuthModal(false)} />
          }
        />
      )}
    </React.Fragment>
  );
};

export default Uploadpage;
