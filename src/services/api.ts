import Axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

const api = Axios.create({
	baseURL,
});

export default api;
