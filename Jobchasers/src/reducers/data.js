import axios from 'axios'
/* import { useEffect, useState } from "react";
 */


const fetchData = () => {

 return axios
  .get("/public/companies.json")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
};

  export default fetchData