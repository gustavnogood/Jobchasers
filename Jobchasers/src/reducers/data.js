import axios from 'axios'
/* import { useEffect, useState } from "react";
 */


axios
  .get("/public/companies.json")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));