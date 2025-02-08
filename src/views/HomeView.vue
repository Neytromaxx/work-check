<template>
    <div class="container">
        <h2>This is a home page</h2>
        <button @click="logout()">chiqish</button>
    </div>
</template>

<script setup>
import store from '../store/store';
import router from '../router/router';

const logout = ()=>{
    store.dispatch('auth/logout')
    router.push('/')
}
</script>