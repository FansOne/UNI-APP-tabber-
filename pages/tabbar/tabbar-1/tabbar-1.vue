<template>
	<view>
		<view class="content">
			<view class="nav">
				<view class="nav-left">
					<scroll-view scroll-y :style="'height:'+height+'px'">
						<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''" v-for="(item,index) in categoryList">
							{{item.NAME}}
						</view>
					</scroll-view>
				</view>
				<view class="nav-right">
					<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation >
						<view :id="index==0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="item.NAME">
							<image :src="item.LOGO" />
							<view>{{item.NAME}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				categoryList:[],
				subCategoryList: [],
				height:0,
				categoryActive:0,
				scrollTop:0,
				scrollHeight:0
			}
		},
		methods:{
			scroll(e){
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight*index;
			},
			getCategory() {
				for(var i=0;i<20;i++){
					var subList = [];
					for(var j=0;j<30;j++){
						subList.push({"NAME":"分类"+i+":商品"+j,"LOGO":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547449014672&di=067eacf00f54d64d56a53c44f1dfd81d&imgtype=0&src=http%3A%2F%2Fimg0.gjw.com%2Fproduct%2F2017%2F0705%2Faca786d98a9042c2b4eb4a883212ff1e.jpg"})
					}
					this.categoryList.push({"NAME":"分类"+i,"subCategoryList":subList})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			}
		},
		onLoad:function(){
			this.getCategory()
			uni.getSystemInfo({
				success: res => {
					this.height = res.screenHeight;
				}
			})
		}
	}
</script>

<style scoped>
	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #E0E0E0;
		border-bottom: solid 1px #E0E0E0;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		width: 70%;
		/* padding-top: 22upx; */
	}

	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
	}
	.nav-right-item image{
		width: 100upx;
		height: 100upx;
	}
	.active {
		color: #F24544;
	}

	.content {
		width: 100%;
	}
</style>
