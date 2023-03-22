import React from "react";
//renderar ut Jobs från datan
const Jobs = ({ jobs }) => {
  const renderJobs = jobs.map((job, i) => {
    return (
      <li key={i}>
       {job.job}
      </li>
    );
  });
  console.log(renderJobs)
  return <ul>{renderJobs}</ul>;
};

export default Jobs;