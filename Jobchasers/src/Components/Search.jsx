import React, { useState } from "react";
import companies from "../companies.json";

export default function Search() {
  const [query, setQuery] = useState("");
  const onChange = (event) => {
    setQuery(event.target.value);
  };
  const onSearch = (item) => {
    return (
      item.companyName.toLowerCase().includes(query.toLowerCase()) ||
      item.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.join(" ").toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredData = companies.filter(onSearch);
  return (
    <div className="search">
      <h1>Search</h1>
      <div className="search-box">
        <div className="search-inner">
          <input type="text" value={query} onChange={onChange} />
          <button onClick={() => onSearch(query)}> Search</button>
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                <h2>{item.companyName}</h2>
                <p>{item.jobTitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
