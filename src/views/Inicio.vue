<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section id="servicios">
      <h2>¿Qué ofrecemos?</h2>
      <div class="cards">
        <RouterLink to="/portafolio">
          <div class="card">
            <h3>Bodas</h3>
            <p>Invitaciones digitales elegantes y personalizadas para ese día tan especial.</p>
          </div>
        </RouterLink>
        <RouterLink to="/portafolio">
          <div class="card">
            <h3>Cumpleaños</h3>
            <p>Invitaciones digitales vibrantes y dinámicas para todas las edades y estilos.</p>
          </div>
        </RouterLink>
        <RouterLink to="/portafolio">
          <div class="card">
            <h3>Eventos</h3>
            <p>Invitaciones digitales para eventos corporativos, baby showers, graduaciones y más.</p>
          </div>
        </RouterLink>
      </div>
    </section>
</template>


<style scoped>
main {
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
  color: #111;
  padding: 40px 20px;
}

section {
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #000;
  letter-spacing: 1px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 24px;
  width: 260px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #000;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #000;
}

.card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
}

a {
  text-decoration: none;
}
</style>
