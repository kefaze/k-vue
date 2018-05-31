<template>
	<div class="content mt40">
		<div class="newsList">
	    	<ul>
	            <li v-for="(item, index) in arrList">
	            	<a href="javascript:;">
	                    <h2>{{index+1}} .{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	            
	        </ul>
	    </div>
	</div>
</template>
<script>
	
	export default {
		data(){
			return {
				arrList: []
			}
		},
		components:{
			
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				let _this = this
				this.$http.get('src/data/follow.data').then(function(res){
					_this.arrList = res.data
				}).catch((err)=>{
					console.log(res)
				})
			}
		}
	}

</script>
<style scoped>
	@import '../assets/css/index.css';

	.mt40{
		margin-top: 40px;
	}
</style>