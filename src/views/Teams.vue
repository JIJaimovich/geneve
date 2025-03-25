<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';

import AppBanner from "../components/AppBanner.vue"
import AppFooter from "../components/AppFooter.vue"
import Sponsors from "../components/Sponsors.vue"


const router = useRouter();
const route = useRoute();

const teamsHome = ref(false)


function onSelectTeam(selection){
    router.push(`/equipes/${selection}`)
    teamsHome.value = false
}



watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    
    // Lógica adicional
    if(newPath === '/equipes'){
        teamsHome.value = true
    } 
  }
)

onMounted(()=>{  
  if(route.fullPath === '/equipes'){
    teamsHome.value = true
  }else{
    teamsHome.value = false
  }
})

</script>

<template>
<div class="page-container bg-gray-100 shadow-md">
    
  <main>       
      <AppBanner />

       <router-view>
       </router-view>


      <div v-if="teamsHome" class="teams-home flex flex-col lg:flex-row px-2 lg:px-[40px] lg:h-[550px] mt-4 gap-1">
          <div 
          class="flex flex-col w-full lg:w-1/3 bg-[#DB1717]  cursor-pointer border hover:border-8 hover:border-[#2c1b18] transition-all duration-300"
          @click="onSelectTeam('premiere')"
          >
            <div class="flex h-[50px] justify-center items-center">
              <p class="text-2xl xl:text-3xl font-medium text-white">US Genève-Ville Première</p>
            </div>
            <div class="flex h-[500px] w-full overflow-hidden relative">
              <img src="/premiere/2017-2018/1er-2017-1.jpg" alt="premiere" class="w-full h-full object-cover object-center">
              <!-- `${import.meta.env.BASE_URL}2017/1er-2017-1.jpg`, -->
            </div>
          </div>

          <div 
          class="flex flex-col w-full lg:w-1/3 bg-[#2c1b18] text-white cursor-pointer border hover:border-8 hover:border-[#DB1717] transition-all duration-300"
          @click="onSelectTeam('senior30')"
          
          >

            <div class="flex h-[50px] justify-center items-center">
              <p class="text-2xl xl:text-3xl font-medium text-white">US Genève-Ville Senior +30</p>
            </div>
            <div class="flex h-[500px] w-full overflow-hidden relative">
              <img src="/senior30/2012-2013/imagen_1011.jpg" alt="premiere" class="w-full h-full object-cover object-center">
              <!-- `${import.meta.env.BASE_URL}2017/1er-2017-1.jpg`, -->
            </div>
         
           
          </div>

          <div 
          class="flex flex-col w-full lg:w-1/3 bg-[#DB1717]  cursor-pointer border hover:border-8 hover:border-[#2c1b18] transition-all duration-300"
          @click="onSelectTeam('histoire')"
          >
            <div class="flex h-[50px] justify-center items-center">
              <p class="text-2xl xl:text-3xl font-medium text-white">US Genève-Ville Histoire</p>
            </div>
            <div class="flex h-[500px] w-full overflow-hidden relative">
              <img src="/deuxemie/2013-2014/imagen_005.jpg" alt="premiere" class="w-full h-full object-cover object-center grayscale">
              <p class="absolute bg-lime-200 py-2 px-4 rounded-sm bottom-2 left-2 font-medium text-lime-900 border border-lime-600">Mémoire d'équipe</p>
              
            </div>
          </div>

          <!-- <div class="flex flex-col h-[550px] w-1/3 gap-1">
            <div
            @click="onSelectTeam('deuxieme')" 
            class="flex flex-col h-[273px] bg-[#DB1717] cursor-pointer">

              <div class="flex h-[50px] justify-center items-center">
                <p class="text-3xl font-medium text-white">US Genève-Ville Deuxième</p>
              </div>
              <div class="flex h-[223px] w-full overflow-hidden relative">
                <img src="/deuxemie/2013-2014/imagen_005.jpg" alt="premiere" class="w-full h-full object-cover object-center grayscale">
                <p class="absolute bg-lime-200 py-2 px-4 rounded-sm bottom-2 left-2 font-medium text-lime-900 border border-lime-600">Mémoire d'équipe</p>
              </div>
            
            </div>
            <div 
            @click="onSelectTeam('senior40')"
            class="flex flex-col h-[273px] bg-[#DB1717] cursor-pointer">

              <div class="flex h-[50px] justify-center items-center">
                <p class="text-3xl font-medium text-white">US Genève-Ville Senior +40</p>
              </div>
              <div class="flex h-[223px] w-full overflow-hidden relative">
                <img src="/senior40/2017-2018/imagen_005.jpg" alt="premiere" class="w-full h-full object-cover object-center grayscale">
                <p class="absolute bg-lime-200 py-2 px-4 rounded-sm bottom-2 left-2 font-medium text-lime-900 border border-lime-600">Mémoire d'équipe</p>

              </div>
              
            </div>
          </div> -->
      </div>
  
       
    </main>
    <Sponsors />

    <AppFooter />
   
    

</div>


</template>
<style scoped>


</style>