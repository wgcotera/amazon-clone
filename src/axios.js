// Allow us to interact with APIs
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-f5772/us-central1/api", // THE API (cloud function) URL
});

export default instance;
