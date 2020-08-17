
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/chat.vue') },
      { path: 'Agregar', component: () => import('pages/solicitudes.vue') },
      { path: 'login', component: () => import('pages/registro/Login.vue') },
      { path: 'registro', component: () => import('pages/registro/Registrarse.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
