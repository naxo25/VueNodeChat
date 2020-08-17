const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

var counter = 0;
var imge = 'https://instagram.fscl19-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/94551501_232252087835718_1265881648790134351_n.jpg?_nc_ht=instagram.fscl19-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=XtI0z4VsXmQAX9bi8_h&oh=02aa4c653015b33953e367534afd1218&oe=5F656416'
const users = {
   "jkhafnx": { Nombre: 'pancho', userImg:'https://i.imgur.com/scrcyJ3.png', online: true},
   "zoqwejs": { Nombre: 'javiera', userImg:'./statics/noimg.png', online: false},
   "nax": { Nombre: 'nax', userImg:imge , online: true}
};
const chats = {
  0: { Nombre: users['jkhafnx'].Nombre, userImg: users['jkhafnx'].userImg, mensaje:'Esta es la demo de un chat en tiempo real', from:'me'},
  1: { Nombre: users['zoqwejs'].Nombre, userImg: users['zoqwejs'].userImg, mensaje:'con nodejs mas vuejs usando sockets io', from:'g'},
  2: { Nombre: users['nax'].Nombre, userImg: users['zoqwejs'].userImg, mensaje:'welcome!', from:'me'},
  3: { Nombre: users['zoqwejs'].Nombre, userImg: users['zoqwejs'].userImg, mensaje:'(y)', from:'g'},

};

app.get('/', async (req, res) => {
    counter = Object.keys(chats).length;
    await res.send(chats);
});
app.get('/users', async (req, res) => {
    //console.log(Object.values(users['nax']))
    //console.log(Object.keys(users))
    await res.send(users);
});
app.post('/', async(req,res) =>{
    const Nombre  = req.body.Nombre;
    if (!users[Nombre]) {
        users[Nombre] = {Nombre: Nombre, userImg:'./statics/noimg.png'};
    };
    await res.send(users[Nombre]);
});

/*app.post('/', async(req, res) => {
    const { Nombre, userImg, mensaje } = req.body;
    const datos = {
        Nombre,
        userImg,
        mensaje
    };
    //const datos = { usuario: userName, userImg: img, mensaje: msj };
    await chats.push(datos);
    datos.id = chats.length;
    await res.send(datos);
});*/

io.on('connection', (socket) => {

  const nombrechats = () => {    
    let nombrechats = []
    var counter = 0
    for (var key in users) {
      nombrechats.push({Nombre:users[key].Nombre, userImg:users[key].userImg})
      counter++;
    };
    //chats.push(datos);
    io.emit('activos', {counter, nombrechats}); 
  };

  socket.on('activos', () => {
    //nombreusers = users.map(item=>item);
    //console.log(nombreusers)
    //nombreusers = nombreusers.push({nombreusers})
    nombrechats();
  });

  socket.on('cant', Name => {
    //console.log(Object.keys(users[Name]))
    if (users[Name] == null) {
        users[Name] = {Nombre: Name, userImg:'./statics/noimg.png'};
    } else {
        users[Name] = {Nombre:users[Name].Nombre, userImg:users[Name].userImg};        
    }
  });

  socket.on('dicant', () => { counter = counter - 1; io.emit('dicant', counter); });

  socket.on('add', async (datos) => {
    counter++;
    datos.userImg = users[datos.Nombre].userImg;
    chats[counter] = datos;
    await io.emit('add', {id:counter, datos});
  });

  socket.on('update', async (datos) => {
    chats[datos.id].mensaje = datos.mensaje;
    await io.emit('update', datos);
  });

  socket.on('delete', async (id) => {
    await delete chats[id];
    await io.emit('delete', id);
  });

  socket.on('nuevo mensaje', async (userName, img, msj) => {
    const datos = { usuario: userName, userImg: img, mensaje: msj };
    await chats.push(datos);
    await io.emit('nuevo mensaje', datos);
  });

  socket.on('nuevo foto', async (userName, img, event) => {
    const datos = { usuario: userName, userImg: img, imagen: event };
    await chats.push(datos);
    await io.emit('nuevo foto', datos);
  });

  socket.on('imgUser', async (datos) => {
    console.log(datos.Nombre)
    users[datos.Nombre].userImg = datos.userImg;
    await io.emit('imgUser', users[datos.Nombre]);

    //await nombrechats();
  });

  socket.on('nuevo video', async (event) => {
    await io.emit('nuevo video', event);
  });

  /*socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });*/
  
});

//setTimeout( () => io.emit('dicant', counter), 3000);

http.listen(4000);