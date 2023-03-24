import React, { useState } from "react";
import companies from "../companies.json";
import spel from "../assets/images/svenska-spel.jpeg";

const FreeSearch = () => {
  const [query, setQuery] = useState("");
  const SearchByText = (item) => {
    return (
      item.companyName.toLowerCase().includes(query.toLowerCase()) ||
      item.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      item.jobDescription.toLowerCase().includes(query.toLowerCase()) ||
      item.category.join(" ").toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredData = companies.filter(SearchByText);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <div className="job-card" key={item.id}>
            <div className="company">
              <a href={item.logoLink}>
                <img className="logo" src={item.logo} alt="logo" />
              </a>
              <h2>{item.companyName}</h2>
            </div>
            <div className="job-details">
              <h3 className="title">{item.jobTitle}</h3>
              <p className="description">{item.jobDescription}</p>
              <p>{item.typeOfEmployment}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FreeSearch;
