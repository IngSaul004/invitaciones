<script setup>
</script>

<template>
  <main>
    <section id="servicios">
    <h2>¿Qué ofrecemos?</h2>
    <div class="cards">
    <a href="#" > 
    <div class="card">
    <h3>Bodas</h3>
    <p>Diseños elegantes, románticos y personalizados.</p>
    </div>
    </a>
    <a href="#">
    <div class="card">
    <h3>Cumpleaños</h3>
    <p>Invitaciones dinámicas y llenas de vida para todas las edades.</p>
    </div>
    </a>
    <a href="https://juanjoneitor.github.io/Bautizo_Saly/">
    <div class="card">
    <h3>Eventos</h3>
    <p>Eventos corporativos, baby showers, graduaciones y más.</p>
    </div>
    </a>
    </div>
  </section>
  </main>
</template>
<style>
main{
    font-family: Arial, Helvetica, sans-serif;
}
section {
  padding: 60px 20px;
  text-align: center;
}

#servicios .cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease; /* transición suave */
}

.card:hover {
  transform: scale(1.05); /* efecto de zoom */
}
</style>
