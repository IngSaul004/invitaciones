<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <h2>Nosotros</h2>
      <p>
        Somos un equipo dedicado a la digitalización de invitaciones para bodas, cumpleaños,
        XV años, eventos especiales y más. Contáctanos por nuestras redes sociales que
        aparecen abajo. Para cotizaciones directas, escríbenos por WhatsApp.
      </p>
      <a href="https://wa.me/523320428286" class="whatsapp-btn" target="_blank">
        🟢 Contáctanos por WhatsApp
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 1rem;
}

.content {
  text-align: center;
  max-width: 600px;
  border: 1px solid #000;
  padding: 2rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.whatsapp-btn {
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
}

.whatsapp-btn:hover {
  background-color: #333;
}
</style>
