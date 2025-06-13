<script setup>
</script>

<template>
  <div class="container">
    <div class="content">
      <form id="form">
        <h1>Iniciar Sesión</h1>
        <label for="usuario">Correo:</label>
        <input type="text" id="usuario" placeholder="Ingresa tu correo" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" required>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<style>
/* Centrado total de la página */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  color: #000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

/* Estilo del formulario */
.content {
  background-color: #fff;
  border: 1px solid #000;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 500;
}

label {
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  padding: 0.7rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #333;
}
</style>
