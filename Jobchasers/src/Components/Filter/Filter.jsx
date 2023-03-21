import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from "../../actions/filter"


const Filter = ({ tags, active, onClickHandler }) => {
    const btnFilter = tags.map ( tag => {
        return ( 
            <div>
                <button 
                    key = {tag}
                    //org: onClick={() => onClickHandler(job)} kan vara ett problem framöver!
                    onClick = {onClickHandler}
                    className={active === tag ? "active" : ""}
                    >
                    {tag.tag}
                </button>
            </div>
        );
    });
    return <div>{btnFilter}</div>
};











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

export default Filter;


