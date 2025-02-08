<template>
    <div class="form-container">
        <form @submit.prevent="submit">
            <input type="text" name="" id="" v-model="email">
            <input type="password" name="" id="" v-model="password">
            <button>Kirish</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();

    const email = ref('')
    const password = ref('')

    const submit = async()=>{
        const res = await store.dispatch('auth/login', {email: email.value, password: password.value})
        console.log(res)
        if(res.success){
            router.push('/home')
        }
    }
</script>