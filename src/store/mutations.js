import getters from './getters'

const state = {
	header: true,
	loading: false,
	footer: true
}

const mutations = {
	headerHide (state) {
		state.header = false
	},
	headerShow(state){
		state.header = true
	},
	showLoading(state){
		state.loading = true
	},
	hideLoading(state){
		state.loading = false
	},
	hideFooter(state){
		state.footer = false
	},
	showFooter(state){
		state.footer = true
	}
}

export default{
	state,
	mutations,
	getters
}