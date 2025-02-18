<!-- <script setup>
</script>
<template>
    <div class="sponsors-container">
        <button class="sponsor-button">
            <img src="../assets/chevronLeft.svg" alt="previous" class="sponsor-icon"/>
        </button>
        <div v-for="n in 3" class="sponsor-container">
            x
        </div>
        <button class="sponsor-button">
            <img src="../assets/chevronRight.svg" alt="next" class="sponsor-icon"/>
        </button>
    </div>
</template>

<style scoped>

</style> -->

<template>
    <div class="slider-container" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
      <button @click="prevSlide" class="slider-btn left">❮</button>
  
      <div class="slider">
        <div
          v-for="(image, index) in visibleImages"
          :key="index"
          class="slide"
        >
          <img :src="image" alt="Imagen del slider" />
        </div>
      </div>
  
      <button @click="nextSlide" class="slider-btn right">❯</button>
    </div>
    
    

  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  


  const images = ref([
    "/autocw.png",
    "/desprazsa.png",
    "/tapernoux.png",
    "/h20.png",
    "/sqs.png",
    "/viamonte.png",

  ]);
  
  const currentIndex = ref(0);
let autoSlideInterval = null;

// Computed para mostrar 3 imágenes a la vez
const visibleImages = computed(() => {
  return images.value.slice(currentIndex.value, currentIndex.value + 3);
});

// Función para mover a la izquierda
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - 3; // Vuelve al final
  }
};

// Función para mover a la derecha
const nextSlide = () => {
  if (currentIndex.value < images.value.length - 3) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Reinicia desde el inicio
  }
};

// Iniciar el auto-slide
const startAutoSlide = () => {
  stopAutoSlide(); // Limpia intervalos anteriores antes de crear uno nuevo
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 2000);
};

// Detener el auto-slide
const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// Pausar al hacer hover y reanudar al salir
const pauseAutoSlide = () => stopAutoSlide();
const resumeAutoSlide = () => startAutoSlide();

// Iniciar el auto-slide cuando el componente se monta
onMounted(startAutoSlide);

// Limpiar el intervalo cuando el componente se desmonta
onUnmounted(stopAutoSlide);
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* gap: 10px; */
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 60px 60px;
  background-color: rgba(248, 246, 246, 0.986);

}

.slider {
  display: flex;
  /* justify-content: center; */
  padding: 0 10px;
  overflow: hidden;
  width: 100%; /* Ajustá el ancho según necesites */
}

.slide img {
  width: 45%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  scroll-snap-align: center;
  border-radius: 8px;
}

.slider-btn {
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  border-radius: 50%;
}

.slider-btn:hover {
  background-color: #555;
}

.slide {
  /* background-color: white; */
  display: flex;
  justify-content: center;
}
</style>
  