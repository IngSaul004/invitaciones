<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const mostrarMenu = ref(false)

const toggleMenu = (e) => {
  e.stopPropagation()
  mostrarMenu.value = !mostrarMenu.value
}

const cerrarMenu = () => {
  mostrarMenu.value = false
}

onMounted(() => {
  document.addEventListener('click', cerrarMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', cerrarMenu)
})
</script>

<template>
  <header class="menu-header">
    <div class="menu-container">
      <div class="menu-title">
        <img src="../assets/logo.png" alt="Logo" class="logo-img" />
        <div class="title-text">
          <h1>PersoInvitaMX</h1>
          <p>Invitaciones digitales únicas para cualquier evento</p>
        </div>
      </div>

      <div class="menu-icons">
        <RouterLink to="/Login" class="user-icon">
          <img src="../assets/usuario.png" alt="Usuario" />
        </RouterLink>

        <div class="menu-toggle" @click.stop="toggleMenu">
          <img src="../assets/menu.png" alt="Menú" />
          <ul class="dropdown" v-show="mostrarMenu">
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
            <li><RouterLink to="/contacto">Contacto</RouterLink></li>
            <li><RouterLink to="/portafolio">Portafolio</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu-header {
  background-color: #fff;
  color: #000;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 999;
}

.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.menu-title {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: flex-start;
}

.logo-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.title-text h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: 600;
}

.title-text p {
  font-size: 0.9rem;
  color: #555;
  margin-top: 4px;
}

.menu-icons {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  justify-content: flex-end;
}

.user-icon img,
.menu-toggle img {
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: grayscale(100%);
  transition: filter 0.2s ease;
}

.user-icon img:hover,
.menu-toggle img:hover {
  filter: grayscale(0%);
}

.dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  background-color: #000;
  padding: 10px 0;
  border-radius: 10px;
  list-style: none;
  width: 160px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.2s ease-out;
}

.dropdown li {
  padding: 12px 20px;
  text-align: right;
}

.dropdown li a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
}

.dropdown li:hover {
  background-color: #222;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .title-text h1 {
    font-size: 1.4rem;
  }

  .title-text p {
    font-size: 0.8rem;
  }

  .menu-icons {
    gap: 10px;
  }

  .logo-img {
    width: 80px;
    height: 80px;
  }
}
</style>
