import axios from "axios";

export default axios.create({
  baseURL: "https://jay-hrr34-mvp.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
