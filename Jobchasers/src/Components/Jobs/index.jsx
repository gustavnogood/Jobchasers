import { connect } from "react-redux";
import Jobs from "./job"

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

export default connect(mapStateToProps)(Jobs);