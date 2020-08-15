import Vue from 'vue';
import axios from 'axios';

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
 
const url = "http://localhost:4000/";

const socket = io(url);
Vue.use(VueSocketIOExt, socket);

 const state = {
	users: {},
	arrNombres: {}
}
const mutations = {
	getUsers(state, payload){
		//Vue.set(state.users, payload.id, payload.details);
		state.users = payload;
	},

	add(state, payload) {
		state.users.push(payload);
	},

	update(state, payload) {
		state.users[payload.id].mensaje = payload.mensaje;
	},

	delete(state, payload) {
		state.users.splice(payload, 1)
	},

	imgUser(state, payload) {		
		console.log(payload)
		
		//state.users[payload.Nombre].userImg = payload.userImg;
	},

	activos(state, datos) {
		console.log(datos)
		state.arrNombres = datos;
	},
	cant(state, datos) {
		state.arrNombres = datos.users;
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
		socket.emit('imgUser', payload);
	},

	getUsers({ commit }) {
		let item = 'amigos';
		axios.get(url).then(response => {
			commit('getUsers', response.data);
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

	handleAuthStateChanged({ commit, dispatch, state }) {
		dispatch('getUsers');
		dispatch('activos');
		socket.on('cant', (datos) => commit('cant', datos) );
		socket.on('activos', (datos) => commit('activos', datos) );
		socket.on('dicant', (counter) => {commit('dicant', counter) } );
		socket.on('add', (datos) => { commit('add', datos); dispatch('noti', datos);} );
		socket.on('update', (datos) => commit('update', datos) );
		socket.on('delete', (datos) => commit('delete', datos) );
		socket.on('imgUser', (datos) => commit('imgUser', datos) );
	},
	activos({ state }, Nombre) {		
		socket.emit('activos');
	},
	cant({ state }, Nombre) {
		socket.emit('cant', Nombre)
	},
	dicant({ state }) {
		socket.emit('dicant');
	}
}
const getters = {
	users: state => {
		return state.users;
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}