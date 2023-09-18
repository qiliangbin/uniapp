<template>
	<view class="map">
		<view class="map-container">
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: ''
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: ''
				}],
				markers: []
			}
		},
		methods: {
			getLocation() {
				console.log(11)
				try {
					uni.getLocation({
						type: 'wgs84',
						success: function(res) {
							console.log('当前位置的经度：' + res.longitude);
							console.log('当前位置的纬度：' + res.latitude);
						},
						fail: (err) => {
							console.log(2222)
							uni.showToast({
								title: '请在设置页中打开地理位置权限',
								icon: 'error'
							})
						}
					})
				} catch (err) {
					console.log(err)
				}
			} 
		},
		mounted() {
			this.getLocation()
		},
		onLoad() {
			
		},
		onShow() {
			uni.showTabBar()
		}
	}
</script>

<style>
	.map {
		width: 100%;
		height: 100%;
	}

	.map-container {
		width: 100%;
		height: 100%;
	}
</style>