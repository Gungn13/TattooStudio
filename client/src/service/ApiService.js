import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/orders";
const REST_API_GENERATE_URL = "http://127.0.0.1:8000/api/generate";


export const createOrder = (order) => axios.post(REST_API_BASE_URL, order)

export const generateImg = (description) => axios.post(REST_API_GENERATE_URL, description)
