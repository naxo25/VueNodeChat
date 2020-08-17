import Vue from 'vue';

const mutations2 = {

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

export default mutations2;