<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './component/menu.vue'
import Footer from './component/footer.vue'
</script>

<template>
  <Menu></Menu>
  <main>
  <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style scoped>

</style>
