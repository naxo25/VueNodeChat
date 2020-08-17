<template>
  <q-page class="flex q-pa-md" style='max-width:350px; margin:auto'>
    
    <q-card class="card" flat>

      <q-form @submit="ingresar">
        <q-input
          required
          v-model="formData.email"
          type='text'
          onkeyup="javascript:this.value=this.value.toLowerCase();"
          label="Ingresa tu Nombre" />
        <q-input
          
          v-model="formData.password"
          type="password"
          class="q-mb-md"
          label="Ingresa tu contraseña" />
        <q-btn
          class='btn-inicio'
          type="submit"
          label="Iniciar sesión" />
      </q-form>

        <q-btn
          flat
          to='/Registro'
          class="full-width"
          label="Registrarse" />
          
      <q-item>
        2020 Nx@ Licencia nXweb
      </q-item>

    </q-card>
  </q-page>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        formData: {
          email: '',
          password: ''
        }
      }
    },
    methods:{      
      ...mapActions('store', ['cant']),
          ingresar (){
            localStorage.Nombre = this.formData.email;
            //localStorage.password = this.formData.password;
            this.cant(this.formData.email)
          }
      }
    }
</script>

<style>
.q-card{
  width:90%; 
  height: 100%; 
  margin: auto
}
.btn-inicio{
  width: 100%; 
  border-radius: 25%
}
</style>