import Vue from 'vue';
import axios from 'axios';

const state = {
	asd: 'viene de otra store'
}
const mutations = {

}
const actions = {
	handleAuthStateChanged(){
		console.log('asdadssd')
	}

}
const getters = {


}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}