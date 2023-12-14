import axios from "axios";

export default axios.create({
  baseURL: "https://highend.onrender.com",
  // "http://localhost:3500",

  headers: { "Content-Type": "application/json" },
});
