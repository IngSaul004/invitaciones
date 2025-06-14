<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <h2>Contactos</h2>
      <p>
        Siguenos en nuestras redes sociales!
      </p>
      <div class="redes">  
      <a href="#"><img src="../assets/facebook.png"></a>
      <a href="#"><img src="../assets/ig.png"></a>
      <a href="#"><img src="../assets/tiktok.png"></a>
      </div> 
      <p>Contactanos via whatsapp</p>
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
.redes img {
  width: 50px;
  padding: 10px;
  transition: transform 0.3s ease; /* Agrega una transición suave para el zoom */
}

.redes img:hover {
  transform: scale(1.2); /* Aumenta el tamaño al pasar el ratón */
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
