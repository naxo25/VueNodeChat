import Vue from 'vue';
//import axios from 'axios';

import state from './state';
import mutations from './mutations';
import actions from './actions';

const getters = {
	chats: state => state.chats,
	users: state => state.users
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}