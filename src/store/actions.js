import io from 'socket.io-client';
const url = "http://localhost:4000/";

const socket = io(url);
import axios from 'axios';

const actions = {

	async add({state, dispatch, commit}, datos) {
		datos.Nombre = state.user.Nombre;
		console.log(datos)
		await socket.emit('add', datos);
	},

	update({state, dispatch, commit}, payload) {
		socket.emit('update', payload);
	},

	delete({state, dispatch, commit}, payload) {
		socket.emit('delete', payload);
	},

	async imgUser({commit}, payload) {
		await socket.emit('imgUser', {Nombre:state.user.Nombre, userImg:payload});
	},

	getchats({ commit }) {
		let item = 'amigos';
		axios.get(url).then(response => {			
			let chats = response.data;
			let id, details;
			for (var key in chats) {
				id = key;
				details = chats[key];
				console.log(chats[key]);
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
				commit('getusers', {id, details});
			}
		});
	},
                  
    noti ({state}, payload) {
          Push.create(state.user.Nombre, {
            body: payload,
            icon: state.user.userImg,
            timeout: 3000,
            onClick: function () {
              this.close();
            }
          });        
    },

	handleAuthStateChanged({ commit, dispatch, state }) {
		if (localStorage.Nombre) { //falta la sesiones
			axios.post(url, {Nombre:localStorage.Nombre}).then(response => {
				commit('user', response.data);				
			})
			this.$router.push('/'); 
			dispatch('getusers');
			//dispatch('activos');
			dispatch('getchats');
			socket.on('dicant', (counter) => {commit('dicant', counter) } );
			socket.on('add', (payload) => { commit('add', payload); dispatch('noti', payload.datos.mensaje );} );
			socket.on('update', (datos) => commit('update', datos) );
			socket.on('delete', (datos) => commit('delete', datos) );
			socket.on('imgUser', (datos) => {
						console.log('en de io');
						console.log(datos)
						commit('imgUser', datos)} 
					);
			socket.on('activos', (datos) => {
				console.log('desp de io')
				commit('activos', datos)
			});
			Push.create('Bienvenido');
			//setTimeout(dispatch('Logout'), 5000)
		} else {
			this.$router.push('/login'); 
		}
	},
    Logout({commit}){
      commit('Logout');
	  this.$router.replace('/login'); 
	  //location.reload();
    },
    clearMessages({state}) {
      state.chats = {};
    },
	async cant({ dispatch,commit }, Name) {
	  dispatch('handleAuthStateChanged');
	},

	activos({ state }) {		
		socket.emit('activos');
	},
	dicant({ state }) {
		socket.emit('dicant');
	}
}

export default actions;