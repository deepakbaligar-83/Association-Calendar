import axios from "axios";

export const event = axios.create({
    baseURL: "https://association-calendar.onrender.com"
  });

  // export const featuredCategory = axios.create({
  //   baseURL: "http://localhost:8000/api/category/",
  //   params: {featured: true}
  // });

