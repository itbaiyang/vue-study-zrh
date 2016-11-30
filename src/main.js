import Vue            from 'vue';
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

import router from "./router";
// import Foo from './components/pool.vue'
// import Bar from './components/topbar.vue'

// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })
const before = router.beforeEach((to, from, next) => {
	console.log(to.path)
	console.log(from.path)
	next()
})
const after = router.afterEach(route => {
	console.log('good')
	
})
const app = new Vue({
  router
}).$mount('#app')
