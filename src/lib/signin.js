import axios from "axios";

// /Change base URL
export default axios.create({
  baseURL: "https://jay-hrr34-mvp.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
