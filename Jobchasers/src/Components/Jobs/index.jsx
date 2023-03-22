/* import { get } from "immer/dist/internal";
 */import { useSelector } from "react-redux";
import Jobs from "./job";

const getFilterJobs = (data, filter) => {
  let jobs = [];
  if (filter === "Rensa") {
    jobs = data.map(obj => obj.jobs);
  } else {
    jobs = data
      .filter(obj => filter === obj.tags)
      .map(obj => obj.jobs);
  }

  return jobs;
};

const JobsContainer = () => {
  const data = useSelector(state => state.data);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const jobs = getFilterJobs(data, visibilityFilter);

  return <Jobs jobs={jobs} />;
};

export default JobsContainer;



























/* import { connect } from "react-redux";
import Jobs from "./job"
//Lägger 
const getFilterJobs = (data, filter) => {
  let jobs = [];
  if (filter === "Rensa") {
    jobs = data.map(obj => obj.jobs);
  } else {
    jobs = data
    .filter(obj => filter === obj.tags)
    .map(obj => obj.jobs);
  }
  
  return jobs;
  
};

const mapStateToProps = state => ({
  jobs: getFilterJobs(state.data, state.visibilityFilter)
});

export default connect(mapStateToProps)(Jobs); */