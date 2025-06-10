<script setup>

</script>

<template>
<footer>
    <p>&copy; 2025 PersoInvitaMX. Todos los derechos reservados.</p>
    <div class="redes">  
    <a href="#"><img src="../../public/img/facebook.png"></a>
    <a href="#"><img src="../../public/img/ig.png"></a>
    <a href="#"><img src="../../public/img/tiktok.png"></a>
    </div>
    <p>Visitanos en nuestras redes</p>
  </footer>
</template>

<style>
footer {
  background: #f0f0f0;
  padding: 20px;
  text-align: center;
  font-size: 14px;
}

.redes img {
  width: 50px;
  padding: 10px;
  transition: transform 0.3s ease; /* Agrega una transición suave para el zoom */
}

.redes img:hover {
  transform: scale(1.2); /* Aumenta el tamaño al pasar el ratón */
}

a {
  text-decoration: none; /* Quita el subrayado */
  color: inherit;        /* Hereda el color del texto del contenedor */
}

</style>
