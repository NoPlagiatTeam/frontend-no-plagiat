import React from "react";

const CircularProgress = ({ pourcentage, circularWidth, title }) => {
  // radius
  const radius = 85;
  // dash array
  const dashArray = radius * Math.PI * 2;
  // dash offset
  const dashOffset = dashArray - (dashArray * pourcentage) / 100;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={circularWidth / 2}
        height={circularWidth / 2}
        viewBox={`0 0 ${circularWidth} ${circularWidth}`}
        color="red"
      >
        <circle
          cx={circularWidth / 2}
          cy={circularWidth / 2}
          strokeWidth="9px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={circularWidth / 2}
          cy={circularWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circularWidth / 2} ${circularWidth / 2})`}
        />
        <text
          x="50%"
          y="55%"
          fontSize={40}
          textAnchor="middle"
          className="circle-text"
          fill="#ddd"
        >
          {Math.round(pourcentage)}%
        </text>
      </svg>
      <h1 className="text-slate-500 text-md font-bold">{title}</h1>
    </div>
  );
};

export default CircularProgress;
