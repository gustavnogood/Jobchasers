import { useSelector } from "react-redux";
import { getFilterJobs } from "./Components/Jobs/index";

import FilterContainer from "./Components/Filter/connect";
import JobsContainer from "./Components/Jobs/index";

function App() {
  const jobsData = useSelector(state => state.data);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const filteredJobs = getFilterJobs(jobsData, visibilityFilter);

  return (
    <div className="App">
      <FilterContainer />
      <JobsContainer jobs={filteredJobs} />
    </div>
  );
}

export default App;






















/* import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'
import Jobs from './Components/Jobs/job'
import { useSelector } from 'react-redux'

function App() {
  const jobs = useSelector(state => state.data);




  return (
    <div className="App">

      <Filter tags={tags} >
      <Jobs jobs={jobs} />
    </div>
  )
}

export default App
 */