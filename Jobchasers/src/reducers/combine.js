import { combineReducers } from "redux";
import fetchData from './data';
import visibilityFilter from './visibilityFilters';

export default combineReducers({
  fetchData,
  visibilityFilter
});