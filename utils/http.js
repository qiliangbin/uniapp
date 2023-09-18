const baseURL = 'http://127.0.0.1:7001'
var token = localStorage.getItem('token') || ''
function setRequestOpts(url, data, method) {
	return {
		url: `${baseURL}${url}`,
		data,
		method,
		timeout: 30000,
	}
}
function get(url, params) {
	const options = setRequestOpts(url, params, "GET")
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

function post(url, data) {
	const options = setRequestOpts(url, data, 'POST')
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
export {
	get,
	post
}