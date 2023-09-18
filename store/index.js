import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules
})
//Vuex.Store 构造器选项
// const Store = new Vuex.Store({
// 	state:{//存放状态
// 		"username":"foo",
// 		"age":18,
// 		"count": 7777
// 	},
// })
// export default Store
