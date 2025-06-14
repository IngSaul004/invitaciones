<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <h2>¿Qué ofrecemos?</h2>
      <div class="cards">
        <a href="">
          <div class="card">
            <h3>Bodas</h3>
            <p>Invitaciones digitales elegantes, románticas y personalizadas para tu día especial.</p>
          </div>
        </a>
        <a href="">
          <div class="card">
            <h3>Cumpleaños</h3>
            <p>Invitaciones digitales llenas de vida, ideales para todas las edades y estilos.</p>
          </div>
        </a>
        <a href="">
          <div class="card">
            <h3>Eventos</h3>
            <p>Invitaciones digitales modernas para baby showers, graduaciones y eventos corporativos.</p>
          </div>
        </a>
      </div>
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
  background: #fff;
  color: #000;
  font-family: 'Segoe UI', sans-serif;
}

.content {
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  color: #111;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 24px;
  width: 280px;
  height: 150px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.3rem;
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

/* 📱 Responsive */
@media (max-width: 768px) {
  .card {
    width: 90%;
  }
}
</style>
