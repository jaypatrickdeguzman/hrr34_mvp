import axios from "axios";

// Change base URL
export default axios.create({
  baseURL: "localhost:8080/api"
});
