<template>
  <component :is="layouts[layout]" v-if="layout"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

const route = useRoute();
const layout = computed(() => route.meta.layout);
const layouts = {
  auth: AuthLayout,
  main: MainLayout,
};
</script>


<style scoped>

</style>
