import axios from 'api/interceptors'

import {IModal} from '@/components/screens/modal/modal.interface'

export const ListService = {
	async get(page = 1) {
		return axios.get(`/testapi/?w=list&page=${page}`);
	},
	async getList(id = 1) {
		return axios.get<IModal>(`/testapi/?w=item&id=${id}`);
	},
}