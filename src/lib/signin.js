import axios from "axios";

// Change base URL
export default axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
