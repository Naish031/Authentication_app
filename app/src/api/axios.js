import axios from "axios";

const Axios = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

export default Axios;