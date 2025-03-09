<script setup>
import { ref, onMounted, computed } from 'vue';
import AppModal from "../components/AppModal.vue";


const isModalOpen = ref(false)

const props = defineProps({
  images: {
    type: Array,
    default: [],
  },
  nextOn: {
    type: Boolean,
    default: false
  },
  prevOn: {
    type: Boolean,
    default: false
  },
})

const emits = defineEmits(['controls'])

let selectedImg = null 

const imgHovered = ref(0)

function handleControls(b){
  
  emits('controls', b)
}



function handleImgClick(n){
  
  selectedImg = n - 1
  isModalOpen.value = true
}

// onMounted(()=>{
//   console.log('mounted')
// })

</script>

<template>

<AppModal :is-open="isModalOpen" @close="isModalOpen = false">
  
  <img :src="images[selectedImg]" alt="club" class="max-w-full max-h-[80vh] object-contain mx-auto rounded-md" >
</AppModal>

<div class="">
   
  
  <div class="gallery grid grid-cols-3 grid-rows-2 relative bg-slate-200 rounded-md overflow-hidden">
    <div 
    v-for="n in 6"
    @click="handleImgClick(n)"
    @mouseenter="imgHovered = n"
    @mouseleave="imgHovered = 0"
    class="gallery-item">
    
        <template v-if="images[n-1]">
            <!-- transition-all duration-300 hover:brightness-50 cursor-pointer -->
            <img :src="images[n-1]" alt="club" class="gallery-img transition-all duration-300 hover:brightness-50 cursor-pointer">
            <img 
            v-if="n === imgHovered"
            src="/src/assets/maximize.svg" alt="maximize" class="maximize-icon">
            
          </template>
          
        </div>

        <button 
        v-if="prevOn"
        class="prev-button" @click="handleControls('prev')">
          <img src="../assets//chevronLeft.svg" alt="previuos" class="chevron-icon">
        </button>
        <button
        v-if="nextOn" 
        class="next-button" @click="handleControls('next')">
          <img src="../assets//chevronRight.svg" alt="next" class="chevron-icon">
        </button>
      </div>
    
      
</div>
</template>

<style scoped>

.chevron-icon {
  height: 42px;
  width: 42px;
}

.maximize-icon {
  height: 40px;
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900;
  pointer-events: none;
}

.prev-button, .next-button {
  cursor: pointer;
  position: absolute;
  background-color: rgb(228, 227, 227);
  
  bottom: 50%;
  transform: translateY(50%);
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: transform 0.3s ease-in-out; */
  transition: width 0.3s, height 0.3s ;

}

.prev-button:hover, .next-button:hover {
  /* transform: scale(1.2); */
  width: 44px;
  height: 44px;
  background-color: rgb(250, 249, 249);
  /* transform: translateY(50%); */

}

.prev-button {
  left: 15px;
}

.next-button {
  right: 15px;
}

/* Cada contenedor de imagen con dimensiones preestablecidas */
.gallery-item {
  width: 100%;
  height: 320px; /* Ajustá esta altura a la que necesités */
  overflow: hidden;
  position: relative;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;     /* Recorta la imagen para llenar el contenedor */
  object-position: center; /* Centra la imagen */
  position: relative;
}
</style>