<template>
  <q-page class="q-pa-md">

    <div v-if='noname == true' style='width:40%; margin: auto;'>
      <table style="margin-top: 10%">
        <tr>
          <td style="text-align: center;">
              <img :src='datos.userImg' onclick="" width="250" height="250" style="cursor: pointer; border-radius: 50%" />
          <p>Tu Nombre:</p>
              <input v-model='datos.Nombre' placeholder="Nuevo Nombre" autofocus>
              <a @click="crearCuenta" class="waves-effect waves-light btn-small">Entra al Chat</a>
              <a onclick="fotoUser.click()" class="waves-effect waves-light btn-small">Cambiar Foto</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>

    <div style="height:550px; overflow: scroll; overflow-x: hidden;">
  {{ datos.Nombre }} <br>  
  <a href="/" @click="removeSesion()">Cerrar sesion</a> 
        <div class="row">
          <table>
              <thead>
                  <tr>
                      <th>Usuario</th>
                      <th>Mensaje</th>
                      <th>Opciones</th>
                  </tr>
              </thead>
              <tbody v-for="(user, index) in users" :key='index'>
                  <tr>
                      <td width="35%">
                          <img :src="user.userImg" height="40" width="40" style="border-radius: 50px">
                          {{ user.Nombre }}
                      </td>
                      <td width="35%">
                          <span v-if="Actualizando && idActualizar == index">
                              <input v-model="datosActualizar.mensaje" type="url" required>
                          </span>
                          <span v-else>
                              {{ user.mensaje }}
                              <img v-if='user.imagen' :src="user.imagen" height="100" width="100" />
                          </span>
                      </td>

                      <td>
                          <span v-if="Actualizando && idActualizar == index">
                              <a @click="editar(index), Actualizando = false" class="waves-effect waves-light btn-small">
                              Guardar</a>
                              <a @click="Actualizando = false" class="waves-light waves-effect btn-small">Cancelar</a>
                          </span>
                          <span v-else>
                              <a @click="verFormActualizar(index)" class="waves-effect waves-light btn-small">
                              Actualizar</a>

                              <a @click="borrar(index)" class="waves-effect waves-light btn-small">Borrar</a>
                          </span>
                      </td>

                      <td>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>

        <div><img :src="datos.userImg" height="40" width="40" style="border-radius: 50px; cursor: pointer;" onclick="subir.click()"> <b> {{ datos.Nombre }}</b></div>
        <input v-model='datos.mensaje' placeholder="Nuevo mensaje" autofocus>
        <a @click="save" class="waves-effect waves-light btn-small">Añadir</a>
        <a onclick="subir.click()" class="waves-effect waves-light btn-small">Foto</a>
   
        <div><q-btn-dropdown
          class='right'
          color="orange"
          no-caps
          label="Usuarios Activos"
        >
          <q-list v-for='nameUser in nombreUsers'>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-img :src='nameUser.userImg' />
              </q-item-section>
              <q-item-section>
                <q-item-label> {{ nameUser.Nombre }} </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
   
        <q-btn-dropdown
          class='right'
          color="blue"
          no-caps
          label="pancho"
        >
        </q-btn-dropdown></div>

    </div>

      <q-dialog v-model="info" transition-show="rotate" transition-hide="rotate">
        <q-card style='width: 300px'>
          <q-card-section>
            <div class="text-h6 text-center">Bienvenido!</div>
          </q-card-section>
        </q-card>
      </q-dialog>

        <form action="/" method="POST" enctype='multipart/form-data'>
          <input hidden id='subir' type="file" @change="enviarFoto" accept="image/*" name="image" />
        </form>

  </q-page>

</template>
  
<script>
  import { mapActions, mapGetters } from 'vuex';

      export default {
        data() {
          return {
            noname: true,
            info: true,
            id: '',
            idFoto: '',
            mensaje: '',
            datosActualizar: {
              mensaje: ''
            },
            datos: {
              Nombre: '',
              userImg: 'https://jaylog.co/wp-content/uploads/2017/12/noimg.png',
              mensaje: ''
            },
            Actualizando: false,
            idActualizar: -1,
            noimg: 'https://i.blogs.es/99f0c0/vue/450_1000.png',
            urlFoto: "http://localhost/rutaApi/change_photo.php",
            url: "http://localhost:4000/"
          }
        },
        mounted() {
          if (localStorage.Nombre){ 
            this.noname = false;
            this.datos.Nombre = localStorage.Nombre;
          }
          if (localStorage.userImg) {
            this.datos.userImg = localStorage.userImg;
          }          
        },
        computed: {
          nombreUsers() {
            return this.$store.state.store.arrNombres;
          },
          ...mapGetters('store', ['users'])
        },
        methods: {
            ...mapActions('store', ['cant','add', 'update', 'delete', 'imgUser', 'dicant']),
                removeSesion(){
                  localStorage.removeItem('Nombre');
                  localStorage.removeItem('userImg');
                  this.dicant();
                },
                async save (){
                  await this.add(this.datos);
                    //this.tareas.push({ usuario: datos.usuario, userImg: datos.userImg, mensaje: datos.mensaje });                    
                  this.datos.mensaje = '';
                },

                editar(index){
                    this.datosActualizar.id = index;
                    this.update(this.datosActualizar)
                    this.ocultarActualizar()
                },
                borrar(index){
                    var r = confirm("¿Está seguro de borrar el registro ?");
                    if (r == true) { 
                      this.delete(index);
                    }
                }, 
                enviarFoto(event) { 
                    let foto = event.target.files[0];
                    var reader = new FileReader();
                     reader.onload = function(evt){
                         var msg ={};
                         msg = evt.target.result;
                         localStorage.userImg = msg;
                     };
                    reader.readAsDataURL(foto);
                    //this.imgUser(localStorage);
                    this.datos.userImg = localStorage.userImg;
                    console.log(this.datos.userImg)
                },

                    verFormActualizar (index) {
                        this.idActualizar = index;
                        this.datosActualizar.mensaje = this.users[index].mensaje;
                        this.Actualizando = true;
                    },
                    ocultarActualizar () {
                        this.Actualizando = false;
                    },
                crearCuenta() {
                  //this.Nombre = newUser;
                  //console.log(socket.emit('crearCuenta', localStorage));
                  /*axios.post('/', {Nombre:this.Nombre}).then(response => {
                    if (response.data.err == 'err'){
                      alert(response.data.msg);
                    } else {
                    }
                  });*/
                      this.noname = false;
                      localStorage.Nombre = this.datos.Nombre;
                      this.cant(this.datos.Nombre);
                },
                fotoUsuario(event){
                    data = event.target.files[0];
                    var reader = new FileReader();
                     reader.onload = function(evt){
                         var msg ={};
                         msg = evt.target.result;
                         localStorage.userImg = msg;
                     };
                    reader.readAsDataURL(data);
                }

            }
      }
    

  </script>
</body>
</html>