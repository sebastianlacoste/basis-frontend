import axios from "axios";

const ClientAxios = axios.create({
	baseURL: `https://api.coingecko.com/api/v3`,
});

export default ClientAxios;
