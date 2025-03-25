<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


// screen width
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

const appMd = 600



onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>

    <router-link to="/equipes">
        
      <div 
      v-if="screenWidth > appMd"
      class="gallery-container cursor-pointer">
          <img src="/gallerypost.jpg" alt="gallery" class=""/>
          <div class="gallery-button flex gap-2 items-center justify-center rounded-sm cursor-pointer bg-gray-100">
              <img src="../assets/images.svg" alt="images" class="images-icon"/>
              <span class="text-gray-600">Images</span>   
          </div>
      </div>

      <div 
      v-else
      class="gallery-container cursor-pointer px-2">
          <img src="/gallerypostmobile.jpg" alt="gallery" class=""/>
          <div class="gallery-button flex gap-2 items-center justify-center rounded-sm cursor-pointer bg-gray-100">
              <img src="../assets/images.svg" alt="images" class="images-icon"/>
              <span class="text-gray-600">Images</span>   
          </div>
      </div>
    </router-link>


</template>

<style scoped>

.gallery-container {
    position: relative;
}

.gallery-button {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 60px);
    z-index: 999;
    
    width: 120px;
    height: 40px;
}

.images-icon {
    height: 20px;
    width: 20px;
}

</style>