<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mostrarMenu = ref(false)

const toggleMenu = (e) => {
  e.stopPropagation()
  mostrarMenu.value = !mostrarMenu.value
}

// Cerrar el menú si se hace clic fuera
document.addEventListener('click', () => {
  mostrarMenu.value = false
})
</script>

<template>
  <header class="menu-header">
    <div class="menu-container">
      <div class="menu-left"></div>

      <div class="menu-title">
        <h1>PersoInvitaMX</h1>
        <p>Invitaciones digitales con estilo único para cualquier evento</p>
      </div>

      <div class="menu-icons">
        <div class="user-icon">
          <RouterLink to="/Login">
          <img src="../../public/img/usuario.png" alt="Usuario">
          </RouterLink>
        </div>

        <div class="menu-toggle" @click.stop="toggleMenu">
          <img src="../../public/img/menu.png" alt="Menú" />
          <ul class="dropdown" v-show="mostrarMenu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Portafolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.menu-header {
  background-color: white;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-left,
.menu-title,
.menu-icons {
  flex: 1;
}

.menu-title {
  text-align: center;
}

.menu-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
  justify-content: flex-end;
}



.user-icon img,
.menu-toggle img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 8px;
}

.dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #222;
  padding: 10px 0;
  border-radius: 8px;
  list-style: none;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.dropdown li {
  padding: 10px;
  text-align: right;
}

.dropdown li a {
  color: white;
  text-decoration: none;
}

.dropdown li:hover {
  background-color: #444;
}
</style>
