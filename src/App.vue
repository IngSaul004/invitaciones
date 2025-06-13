<script setup>
import { RouterView } from 'vue-router'
import Menu from './component/menu.vue'
import Footer from './component/footer.vue'
</script>

<template>
  <Menu />
  <transition name="fade-slide" mode="out-in">
    <RouterView />
  </transition>
  <Footer />
</template>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
