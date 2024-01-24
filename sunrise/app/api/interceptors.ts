import axios from 'axios'

import { API_URL } from '../config/api.config'

axios.defaults.withCredentials = true
export const axiosQuery = axios.create({
	baseURL: 'https://taxivoshod.ru',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const instance = axios.create({
	baseURL: 'https://taxivoshod.ru',
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		throw error
	}
)

export default instance