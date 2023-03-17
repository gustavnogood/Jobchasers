import React from "react"
import "./Filter.css"

const Filter = ({ tags, active, onClickHandler }) => {
    const btnFilter = tags.map ( tag => {
        return ( 
            <div>
            <button 
            key = {tag}
            //org: onClick={() => onClickHandler(job)} kan vara ett problem framöver!
            onClick = {onClickHandler(tag)}
            className={active === tag ? "active" : ""}
            >
                {tag}
            </button>
            </div>
        );
    });
    return <div>{btnFilter}</div>
};

export default Filter;