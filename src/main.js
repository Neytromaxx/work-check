import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import {auth} from './firebase'
import App from './App.vue'

auth.onAuthStateChanged((user)=>{
    if(user){
        store.commit('auth/setUser',{uid: user.uid, email: user.email})
    }
})

createApp(App)
.use(router)
.use(store)
.mount('#app')
