<template>
  <q-page 
    ref="pageChat"
    no caps
    class="page-chat flex column">
    <q-banner 
      v-if="!otherUser.online"
      class="bg-grey-4 text-center top">
      {{ otherUser.name }} is offline.
    </q-banner>
    <div 
      :class="{ 'invisible' : !showMessages }"
      class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, key) in chats"
        :key="key"
        :sent="message.from == 'me' ? true : false">
        <span class="text-weight-bold">
          {{ message.Nombre }}
          <br>
          {{ message.mensaje }}
          {{ message.hora }}
        </span>
      </q-chat-message>
    </div>
    <q-footer>
        <q-toolbar class="bg-grey-3 text-black text-weight-bold row">
          <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="mensaje" placeholder="Type a message" @keyup.enter='save()' />
          <q-btn round flat icon="send" @click='save' />
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { date } from 'quasar'

      export default {
        data() {
          return {
        newMessage: '',
        showMessages: true,
        otherUser: {},
            noname: true,
            info: false,
            id: '',
            idFoto: '',
            mensaje: '',
            datos: {},
            Actualizando: false,
            idActualizar: -1,
            noimg: 'https://i.blogs.es/99f0c0/vue/450_1000.png',
            urlFoto: "http://localhost/rutaApi/change_photo.php",
            url: "http://localhost:4000/"
          }
        },
        mounted() {
          this.otherUser = this.$store.state.store.chats
          console.log(this.asd)
        },
        computed: {
          ...mapState('store', ['chats', 'users', 'user']),
          asd() { return this.$store.state.store2.asd; },
        },
        methods: {
            ...mapActions('store', ['cant', 'add', 'update', 'delete', 'imgUser', 'dicant']),
                async save (){            
                  var timeStamp = new Date(); var from = 'me';
                  if (Math.floor((Math.random() * 2) + 1) == 1) { from = 'then' };
                  var hora = date.formatDate(timeStamp, 'HH:mm:ss DD/MM');
                  await this.add({mensaje:this.mensaje,from,hora});
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
                }

            }
      }
    

  </script>


        //:name="message.from == 'me' ? userDetails.name : otherUser.name"