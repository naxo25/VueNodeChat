import Vue from 'vue';
import axios from 'axios';

//import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
const url = "http://localhost:4000/";

const socket = io(url);
//Vue.use(VueSocketIOExt, socket);

 const state = {
 	user: {},
	chats: {},
	users: {},
	arrNombres: 'variable de otra store'
}
const mutations = {
	getusers(state, payload){
		Vue.set(state.users, payload.id, payload.details);
		//state.chats = payload;
	},
	getchats(state, payload){
		Vue.set(state.chats, payload.id, payload.details);
		//state.chats = payload;
	},

	add(state, payload) {
		state.chats.push(payload);
	},

	update(state, payload) {
		state.chats[payload.id].mensaje = payload.mensaje;
	},

	delete(state, payload) {
		state.chats.splice(payload, 1)
	},

	imgUser(state, payload) {
		console.log('commit')
		console.log(payload);
		//state.user.userImg = .userImg;
		state.users[payload.Nombre].userImg = payload.userImg;
		
	},

	activos(state, datos) {
		console.log(datos)
		state.arrNombres = datos.nombrechats;
	},
	user(state, datos) {
		state.user = localStorage;
	},
	cant(state) {

	},
	dicant(state, counter) {
		console.log(counter+' usuarios');
	}
}
const actions = {

	add({state, dispatch, commit}, payload) {
		socket.emit('add', payload);		
	},

	update({state, dispatch, commit}, payload) {
		socket.emit('update', payload);
	},

	delete({state, dispatch, commit}, payload) {
		socket.emit('delete', payload);
	},

	imgUser({commit}, payload) {
		console.log('imgUser')
		socket.emit('imgUser', localStorage);
	},

	getchats({ commit }) {
		let item = 'amigos';
		axios.get(url).then(response => {			
			let chats = response.data;
			let id, details;
			for (var key in chats) {
				id = key;
				details = chats[key];
				commit('getchats', {id, details});
			}
		});
	},
	getusers({ commit }) {
		let item = 'amigos';
		axios.get(url+'users').then(response => {			
			let chats = response.data;
			let id, details;
			for (var key in chats) {
				id = key;
				details = chats[key];
				console.log(chats[key]);
				console.log(key);
				commit('getusers', {id, details});
			}
		});
	},
                  
    noti ({}, datos) {
        if (datos.Nombre !== localStorage.Nombre) {
          Push.create(datos.Nombre, {
            body: datos.mensaje,
            icon: datos.userImg,
            timeout: 3000,
            onClick: function () {
              this.close();
            }
          });
        }
    },

	handleAuthStateChanged2({ commit, dispatch, state }) {
		if (localStorage.Nombre) {
			commit('user');
			dispatch('getusers');
			dispatch('getchats');
			dispatch('activos');
			socket.on('dicant', (counter) => {commit('dicant', counter) } );
			socket.on('add', (datos) => { commit('add', datos); dispatch('noti', datos);} );
			socket.on('update', (datos) => commit('update', datos) );
			socket.on('delete', (datos) => commit('delete', datos) );
			socket.on('imgUser', (datos) => {
						console.log('desp de io');
						commit('imgUser', datos)} 
					);
		}
	},
	initactivos({ state }) {		
		socket.emit('activos');
		socket.on('activos', (datos) => commit('activos', datos) );
	},
	cant({ state, dispatch }, Name) {
		console.log(Name)
		axios.post(url, {Name});
		dispatch('handleAuthStateChanged');
	},
	dicant({ state }) {
		socket.emit('dicant');
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