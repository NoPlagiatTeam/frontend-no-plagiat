import React from "react";
import { CircularProgress } from "../../atoms";
import StatElement from "../StatElement/StatElement";

const StatisticGraph = ({ statData, resultPlagiat }) => {
  return (
    <React.Fragment>
      <div className="px-20 py-4 flex items-center justify-center gap-3 h-80 w-full">
        <div className="grid grid-cols-2 gap-4">
          <StatElement
            title="Total words"
            singleWord="W"
            number={statData.nbmot}
          />
          <StatElement
            title="Total pages"
            singleWord="P"
            number={statData.page}
            color="text-white bg-green-500"
          />
          <StatElement
            title="Plagiarized phrases"
            singleWord="P"
            number={resultPlagiat.plagiarized}
            color="text-white bg-yellow-500"
          />
          <StatElement
            title="Unique Sentences"
            singleWord="U"
            number={resultPlagiat.unique}
            color="text-white bg-red-500"
          />
        </div>
        <div className="grid grid-cols-2 h-full w-72 gap-3">
          <div className=" flex flex-col justify-center border border-gray-200 rounded-lg h-full w-full">
            <CircularProgress
              title="Plagiarized"
              pourcentage={
                (resultPlagiat.plagiarized * 100) / resultPlagiat.totalphrase
              }
              circularWidth={200}
            />
          </div>
          <div className=" flex flex-col justify-center border border-gray-200 rounded-md h-full w-full">
            <CircularProgress
              title="Unique"
              pourcentage={
                (resultPlagiat.unique * 100) / resultPlagiat.totalphrase
              }
              circularWidth={200}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StatisticGraph;
