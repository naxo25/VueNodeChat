import Vue from 'vue';

const mutations = {
	getusers(state, payload){
		Vue.set(state.users, payload.id, payload.details);
	},
	getchats(state, payload){
		Vue.set(state.chats, payload.id, payload.details);
	},

	add(state, payload) {
		Vue.set(state.chats, payload.id, payload.datos);
	},

	update(state, payload) {
		console.log(payload)
		state.chats[payload.id].mensaje = payload.mensaje;
	},

	delete(state, payload) {
		Vue.delete(state.chats, payload)
	},

	imgUser(state, payload) {
		console.log(payload);
		//state.user.userImg = payload.userImg;
		//state.users[payload.Nombre].userImg = payload.userImg;	
	},

	activos(state, datos) {
		console.log(datos)
		//state.users = datos.nombrechats;
	},
	user(state, datos) {
		state.user = datos;
		localStorage.userImg = datos.userImg;
		localStorage.Nombre = datos.Nombre;
		console.log(datos)
	},
	cant(state) {

	},
	Logout(state, counter) {
		state.user = {};
		state.users = {};
		state.chats = {};
      	localStorage.removeItem('Nombre');
      	localStorage.removeItem('userImg');
      	localStorage.removeItem('users')
	}
}

export default mutations;