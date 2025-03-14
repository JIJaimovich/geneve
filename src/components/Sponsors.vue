<template>
  <div class="slider-container" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
    <button @click="prevSlide" class="slider-btn left">❮</button>

    <div class="slider">
      <div v-for="(image, index) in visibleImages" :key="index" class="slide">
        <img :src="image" alt="Imagen del slider" />
      </div>
    </div>

    <button @click="nextSlide" class="slider-btn right">❯</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  `${import.meta.env.BASE_URL}autocw.png`,
  `${import.meta.env.BASE_URL}desprazsa.png`,
  `${import.meta.env.BASE_URL}tapernoux.png`,
  `${import.meta.env.BASE_URL}h20.png`,
  `${import.meta.env.BASE_URL}techbat.png`,
  `${import.meta.env.BASE_URL}viamonte.png`,
  `${import.meta.env.BASE_URL}kublaiv.png`,
  `${import.meta.env.BASE_URL}dalloy.png`,
]);

const currentIndex = ref(0);
const autoSlideInterval = ref(null);
const imgQty = ref(3); // Número de imágenes visibles

// Computed para mostrar solo la cantidad de imágenes definidas por imgQty
const visibleImages = computed(() => {
  return images.value.slice(currentIndex.value, currentIndex.value + imgQty.value);
});

// Función para actualizar imgQty en función del ancho de la pantalla
const updateImageQuantity = () => {
  const width = window.innerWidth;
  if (width > 1200) {
    imgQty.value = 4;
  } else if (width > 900) {
    imgQty.value = 3;
  } else if (width > 600) {
    imgQty.value = 2;
  } else {
    imgQty.value = 1;
  }
};

// Función para mover a la izquierda
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - imgQty.value; // Vuelve al final
  }
};

// Función para mover a la derecha
const nextSlide = () => {
  if (currentIndex.value < images.value.length - imgQty.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Reinicia desde el inicio
  }
};

// Iniciar el auto-slide
const startAutoSlide = () => {
  stopAutoSlide(); // Limpia intervalos anteriores antes de crear uno nuevo
  autoSlideInterval.value = setInterval(() => {
    nextSlide();
  }, 3000);
};

// Detener el auto-slide
const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value);
    autoSlideInterval.value = null;
  }
};

// Eventos de hover para pausar y reanudar el auto-slide
const pauseAutoSlide = () => stopAutoSlide();
const resumeAutoSlide = () => startAutoSlide();

// Agregar el evento de resize al montar el componente
onMounted(() => {
  updateImageQuantity(); // Ajustar la cantidad de imágenes inicial
  window.addEventListener("resize", updateImageQuantity);
  startAutoSlide();
});

// Eliminar el evento de resize al desmontar el componente
onUnmounted(() => {
  window.removeEventListener("resize", updateImageQuantity);
  stopAutoSlide();
});
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 60px;
  background-color: rgba(248, 246, 246, 0.986);
}

.slider {
  display: flex;
  justify-content: center;
  padding: 0 10px;
  overflow: hidden;
  width: 100%;
}

.slide img {
  width: 65%;
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
  display: flex;
  justify-content: center;
}
</style>
