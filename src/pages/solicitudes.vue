<template>
  <q-page class="flex q-pa-md"> 

    <q-list 
      class="full-width"
      style='margin-bottom:50px' 
      separator>
      <q-item-section>
         <q-item 
          v-for='(amigo, key) in users'
          :key="key"
          clickable
          v-ripple>
        
          <q-item-section avatar @click="verfoto(amigo), card = true">
            <q-avatar>
              <img id='preload' :src="amigo.userImg != null ? amigo.userImg : noimg" />
            </q-avatar>
          </q-item-section>
                
          <q-item-section class='text-left' @click='go(key)'>
            <q-item-label>{{ amigo.Nombre }}</q-item-label>
            <q-item-label class='text-caption text-grey'>{{ amigo.ultChat }}</q-item-label>
          </q-item-section>
                          
          <q-item-section side>
            <q-badge @click='go(key)'
              :color="amigo.online ? 'light-primary-5' : 'grey-4'">
              {{ amigo.online ? 'Online' : 'Offline' }}
            </q-badge>
          </q-item-section>

        </q-item>
      </q-item-section>
      
    </q-list>

    <q-dialog v-model="card">
      <q-card class="my-card" style='width: 95%; height:21.1em' >
        <q-img :src="amigoClick.userImg != null ? amigoClick.userImg : noimg" style='height: 15em' />

        <q-card-section>
            <div class="col text-h6 ellipsis">
              {{amigoClick.Nombre}}    
            </div>
          <q-badge :color="amigoClick.online ? 'light-green-5' : 'grey-4'">
            {{amigoClick.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-card-section>

      </q-card>
    </q-dialog>
  </div>
  </q-page>
</template>
  
<script>
  import { mapActions, mapGetters } from 'vuex';

      export default {
        data() {
          return {
            card: false,
            amigoClick: {},
            noname: true,
            info: false,
            id: '',
            idFoto: '',
            mensaje: '',
            datosActualizar: {
              mensaje: ''
            },
            datos: {},
            Actualizando: false,
            idActualizar: -1,
            noimg: 'https://i.blogs.es/99f0c0/vue/450_1000.png',
            urlFoto: "http://localhost/rutaApi/change_photo.php",
            url: "http://localhost:4000/"
          }
        },
        mounted() {
          console.log(this.$store.state.activos.arrNombres)
        },
        computed: {
          users() {
            return this.$store.state.store.users;
          },
          user() {
            return this.$store.state.store.user;
          },
          asd() {
            return this.$store.state.activos.arrNombres;
          },
          ...mapGetters('store', ['chats'])
        },
        methods: {
            ...mapActions('store', ['cant','add', 'update', 'delete', 'imgUser', 'dicant']),
                removeSesion(){
                  localStorage.removeItem('Nombre');
                  localStorage.removeItem('userImg');
                  this.dicant();
                },
                async save (){
                  await this.add(this.mensaje);
                    //this.tareas.push({ usuario: datos.usuario, userImg: datos.userImg, mensaje: datos.mensaje });
                  this.mensaje = '';
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
                async enviarFoto(event) { 
                    var reader = new FileReader();
                     reader.onload = function(evt){
                         var msg ={};
                         msg = evt.target.result;
                         document.getElementById('userFoto').src = msg;
                         //localStorage.userImg = msg
                     };
                    var valor = event.target.files[0];
                    reader.readAsDataURL(valor);
                    var foto = document.getElementById('userFoto').src;
                    await this.cargarFoto(foto);
                },
                cargarFoto(foto) {
                    this.imgUser(foto);
                },

                    verFormActualizar (index) {
                        this.idActualizar = index;
                        this.datosActualizar.mensaje = this.chats[index].mensaje;
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
                      localStorage.userImg = './statics/noimg.png';
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
                },

                verfoto(amigo){
                    this.amigoClick.userImg = amigo.userImg
                    this.amigoClick.Nombre = amigo.Nombre
                    this.amigoClick.online = amigo.online
                }

            }
      }
    

</script>