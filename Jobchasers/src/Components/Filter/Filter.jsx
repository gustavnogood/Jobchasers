import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../../actions/filter";
import Filter from "./Filter.jsx";

const getFilterTags = data => {
  let arrTags = ["Rensa"];
  data.forEach(item => {
    if (arrTags.indexOf(item.tag) === -1) {
      arrTags.push(item.tag);
    }
  });
  return arrTags;
};

const FilterContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => getFilterTags(state.data.tag));
  const active = useSelector(state => state.visibilityFilter);

  const onClickHandler = (tag) => {
    dispatch(setVisibilityFilter(tag));
  };

  return <Filter tags={tags} active={active} onClickHandler={onClickHandler} />;
};

export default FilterContainer;
























/* import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from "../../actions/filter"

// Renderar en knapp och sätter namnet för respektive tag på den
const Filter = ({ tags, active, onClickHandler }) => {
    const btnFilter = tags.map ( tag => {
        return ( 
            <div>
                <button 
                    key = {tag}
                    //org: onClick={() => onClickHandler(job)} kan vara ett problem framöver!
                    onClick ={ () => onClickHandler(tag)}
                    className={active === tag ? "active" : ""}
                    >
                    {tag.tag}
                </button>
            </div>
        );
    });
    return <div>{btnFilter}</div>
}; */











/* const Filter = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.data.tag);
  
  if (!Array.isArray(tags)) {
    return null; // or some error message
  }

  return (
    <div>
      <p>Filter by tag:</p>
      <select
        onChange={(e) => dispatch(setVisibilityFilter(e.target.value))}
      >
        <option value="All">All</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}; */

/* export default Filter; */


