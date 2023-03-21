import React from "react";

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