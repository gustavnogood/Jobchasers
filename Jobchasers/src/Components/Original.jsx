import React, { useState } from "react";

export default function Original() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
  };
  return (
    <div className="search">
      <h1>Search</h1>
      <div className="search-box">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search</button>
        </div>
      </div>
    </div>
  );
}
