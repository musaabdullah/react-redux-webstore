import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const fetchData = () => axios.get(url);
