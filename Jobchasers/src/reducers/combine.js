import { combineReducers } from "redux";
import data from './data';
import visibilityFilter from './visibilityFilters';

export default combineReducers({
  data,
  visibilityFilter
});