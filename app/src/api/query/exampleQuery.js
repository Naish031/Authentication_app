import axios from "axios";

export const fetchExample = async () => {
  try {
    const data = axios.get("/");
    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
