<script setup>

import { ref, watch, onMounted, onUnmounted } from 'vue';


const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

// const appLg = 800
const appLg = 1024



onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <!-- v-if=" screenWidth > appLg" -->
  <div 
  v-if="screenWidth > appLg"
  class="club-banner">
      <img 
      
      src="../assets/img/geneve-view.jpg" alt="Geneve" class="geneve-view w-full"/>
      
      <img src="../assets/img/logo-geneve.png" alt="Geneve" class="logo-geneve" />
  </div>
  <div 
  v-else-if="screenWidth < appLg && screenWidth > 500"
  class="club-banner">      
      <img 
      src="../assets/img/geneve-view-md.jpg" alt="Geneve" class="geneve-view w-full"/>
      <img src="../assets/img/logo-geneve.png" alt="Geneve" class="logo-geneve" />
  </div>
  <div 
  v-else
  class="club-banner">
      
      <img 
      src="../assets/img/geneve-view-mobile.jpg" alt="Geneve" class="geneve-view w-full"/>
      <img src="../assets/img/logo-geneve.png" alt="Geneve" class="logo-geneve" />
  </div>
</template>

<style scoped>


.club-banner {
    position: relative;
    display: inline-block; /* Para que el div se ajuste al tamaño de la imagen */

}


.logo-geneve {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%); /* Solo centra verticalmente */
    height: auto;
    width: 100px;    
}

@media (min-width: 1000px) {
  .logo-geneve {
    width: 150px;
  }
}


/* @media (min-width: 800px) {
  .logo-geneve {
    width: 100px;
  }
}

@media (min-width: 900px) {
  .logo-geneve {
    width: 125px;
  }
}

@media (min-width: 1100px) {
  .logo-geneve {
    width: 150px;
  }
}

@media (min-width: 1500px) {
  .logo-geneve {
    width: 200px;
  }
} */

</style>