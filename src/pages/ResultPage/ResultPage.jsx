import React, { useState } from 'react';
import { getDate } from '../../utils/getDate';
import { useGetStoreData } from '../../hooks/useGetStoreData';
import { lowerCase } from '../../utils/lowerCase';
import jsPdf from 'jspdf';
import html2canvas from 'html2canvas';

import { NavBar, Reference, StatisticGraph } from '../../components/molecules';
import { BigText, SmallText } from '../../components/atoms';
import { themeCtx } from '../../context/ThemeContext';
import URL_SERVER from '../../services/routes';

const Resultpage = () => {
  // getLocalstorage
  const statData = useGetStoreData('result');
  const plagiatResult = useGetStoreData('plagiatResult');
  const references = useGetStoreData('references');
  const userToken = useGetStoreData('token');
  const userData = useGetStoreData('user');
  // theme context
  const darkCtx = themeCtx();

  // state
  const [isloading, setIsLoading] = useState(false);

  // plagiarized phrases and document text
  const plagiarizedPhrases = plagiatResult.similarityResults.plagiarizedPhrases;
  const text = plagiatResult.similarityResults.text;

  // send pdf to backend
  // const sendPdfHandler = async (generateDoc) => {
  //   const formData = new FormData();
  //   formData.append('rapport', generateDoc, 'document.pdf');
  //   formData.append('userId', userData.id);

  //   try {
  //     console.log(generateDoc);
  //     const response = await fetch(URL_SERVER + '/api/rapport/add', {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         Authorization: 'Bearer ' + userToken,
  //       },
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // download pdf rapport

  const generatePDF = async () => {
    const input = document.getElementById('pdf-content');

    const contentWidth = input.offsetWidth;
    const contentHeight = input.offsetHeight;

    setIsLoading(true);

    try {
      const canvas = await html2canvas(input, {
        scrollY: -window.scrollY,
        height: contentHeight,
      });

      if (canvas) {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPdf('p', 'pt', [contentWidth, contentHeight]);
        pdf.addImage(imgData, 'PNG', 0, 0, contentWidth, contentHeight);
        const generateDoc = pdf.output('blob');
        // sendPdfHandler(pdfOutput);

        const formData = new FormData();
        formData.append('rapport', generateDoc, `rapport${Date.now()}.pdf`);
        formData.append('userId', userData.id);

        const response = await fetch(URL_SERVER + '/api/rapport/add', {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: 'Bearer ' + userToken,
          },
        });

        const data = await response.json();
        console.log(data);

        setIsLoading(false);
        // pdf.save('rapport-NoPlagiat-' + getDate());
      }
    } catch (err) {
      console.log(err);
    }

    // .then((canvas) => {
    //   const imgData = canvas.toDataURL('image/png');

    //   const pdf = new jsPdf('p', 'pt', [contentWidth, contentHeight]);
    //   pdf.addImage(imgData, 'PNG', 0, 0, contentWidth, contentHeight);
    //   const pdfOutput = pdf.output('blob');
    //   sendPdfHandler(pdfOutput);

    //   setIsLoading(false);
    //   pdf.save('rapport-NoPlagiat-' + getDate());
    // });
  };

  return (
    <React.Fragment>
      <div
        className={
          darkCtx.isDark ? 'bg-black text-gray-400' : 'bg-white text-black'
        }
      >
        <NavBar isloading={isloading} isDownload={true} onClick={generatePDF} />
        <div id="pdf-content" className="px-20 py-6">
          <div className="flex items-center justify-between">
            <BigText
              title="Plagiarism Report"
              textStyle="font-bold text-gray-700"
            />
            <h2>{getDate()}</h2>
          </div>

          {/* statistics part */}
          <StatisticGraph
            statData={statData}
            resultPlagiat={plagiatResult.similarityResults}
          />

          {/* Content part */}
          <div className="">
            <div
              className={`my-8 py-4 px-5 rounded-lg border ${
                darkCtx.isDark ? 'border-[#212121]' : 'border-gray-200'
              }`}
            >
              <SmallText title="Content" />
              <p className="p-5">
                {text.map((phrase, index) => (
                  <span
                    key={index}
                    className={
                      plagiarizedPhrases.includes(phrase)
                        ? 'bg-red-400 text-gray-100'
                        : 'text-gray-600'
                    }
                  >
                    {phrase}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* References */}
          <div className="flex flex-col gap-3">
            {references.similarityResults
              .sort((ref1, ref2) => ref2.similarity - ref1.similarity)
              .map((reference) => (
                <Reference key={reference.similarity} reference={reference} />
              ))}
          </div>

          {/*  result */}
          {/* <div className="py-14 flex flex-col items-center h-full">
            <table className="border">
              <tr className="border text-bold text-violet-600">
                <td className="border p-6">pdf Files</td>
                <td className="p-6">Similarity</td>
              </tr>

              <tbody>
                {data.similarityResults.map((item) => (
                  <tr className="border">
                    <td className="border p-6">
                      <a
                        href={URL_SERVER + "/" + item.pdfFile}
                        className="text-blue-600 underline"
                      >
                        {item.pdfFile}
                      </a>
                    </td>
                    <td className="p-6">{item.similarity}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resultpage;
