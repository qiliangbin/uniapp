import { get, post } from '@/utils/http.js'
export const login = (data) => {
	return post('/uniapp/login', data)
}