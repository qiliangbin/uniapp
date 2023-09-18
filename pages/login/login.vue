<template>
	<view class="container">
		<!-- 展示不同的排列方式 -->
		<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left" :rules="customRules">
			<uni-forms-item label="姓名" required name="name">
				<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" required name="age">
				<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
			</uni-forms-item>
		</uni-forms>
		<view class="footer">
			<button type="primary" size="mini" @click="submit('baseForm')">提交</button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import { login } from '@/api/login.js'
	export default {
		data() {
			return {
				baseFormData: {
					name: '',
					age: '',
				},
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
				}
			}
		},
		onLoad() {
		},
		onShow() {
			uni.hideTabBar()
		},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.baseForm.setRules(this.customRules)
		},
		computed: {
			...mapState('global', {
				count: state => state.count
			})
		},
		methods: {
			submit(refName) {
				this.$refs[refName].validate().then(async (res) => {
					const {name, age} = res
					const params = {
						account: name,
						password: age
					}
					const { data } = await login(params)
					if(data.status) {
						uni.switchTab({
							url: '/',
							success: () => {
								const currentPage = getCurrentPages().pop()
								if(!currentPage) currentPage.onLoad()
							}
						})
					} else {
						Toast({
						  message: data.msg,
						  duration: 2000
						})
					}
				}).catch(err => {
					console.log('err:', err)
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.footer{
		text-align: center;
	}
</style>
