

export default{
	headerHide: ({commit})=>{
		commit('headerHide')
	},
	headerShow: ({commit})=>{
		commit('headerShow')
	},
	showLoading: ({commit})=>{
		commit('showLoading')
	},
	hideLoading: ({commit})=>{
		commit('hideLoading')
	},
	hideFooter: ({commit})=>{
		commit('hideFooter')
	},
	showFooter: ({commit})=>{
		commit('showFooter')
	}
}