const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

var counter = 0;
const users = [
  { id: 0, Nombre: 'pancho', userImg:'https://i.imgur.com/scrcyJ3.png'},
  { id: 1, Nombre: 'javiera', userImg:'https://jaylog.co/wp-content/uploads/2017/12/noimg.png'}
];
const chats = [
  { id: 0, Nombre: 'pancho', userImg: users[0].userImg, mensaje:'Esta es la demo de un chat en tiempo real'},
  { id: 1, Nombre: 'javiera', userImg: users[1].userImg, mensaje:'con nodejs mas vuejs usando sockets io'}
];

app.get('/', async (req, res) => {
    await res.send(chats);
});

app.post('/', async(req, res) => {
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
});

io.on('connection', (socket) => {

  socket.on('activos', () => {
    io.emit('activos', users); 
  });
  socket.on('cant', (Name) => { 
    users.push({Nombre: Name, id: users.length }); 
    var nombreusers = Array.from(users)
    nombreusers = users.map(item=>item.Nombre);
    nombreusers = nombreusers.push({nombreusers})
    counter = users.length; 
    io.emit('cant', {counter, users}); 
  });

  socket.on('dicant', () => { counter = counter - 1; io.emit('dicant', counter); });

  socket.on('add', async (datos) => {
    await chats.push(datos);
    await io.emit('add', datos);
  });

  socket.on('update', async (datos) => {
    chats[datos.id].mensaje = datos.mensaje;
    await io.emit('update', datos);
  });

  socket.on('delete', async (id) => {
    await chats.splice(id, 1);
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

  socket.on('imgUser', async (event) => {
    await io.emit('imgUser', event);
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