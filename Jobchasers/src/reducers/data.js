import axios from 'axios'
/* import { useEffect, useState } from "react";
 */

const initState = [
  { job: ["Webhallen"], tag: ["Store"]},
  { job: ["Nordea"], tag: ["Office", "Bank"]},
  { job: ["Svenska Spel"], tag: ["Betting", "Office", "Store"]},
  { job: ["Chas"], tag: ["Office"]}
]

/* const fetchData = () => {

 return axios
  .get("/public/companies.json")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}; */



export const data = (state = initState) => {
  return state;
};


export default data