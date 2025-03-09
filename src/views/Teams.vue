<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';

import AppBanner from "../components/AppBanner.vue"
import AppFooter from "../components/AppFooter.vue"
import Sponsors from "../components/Sponsors.vue"

// import TeamsHome from "../components/teams/TeamsHome.vue";
// import TeamsSection from "../components/teams/TeamsSection.vue";

// const teamsSectionSelected = ref( false )

// function handleSelection(selection){
//     console.log('acá', selection)
//     teamsSectionSelected.value = true
// }

const router = useRouter();
const route = useRoute();

const teamsHome = ref(false)


function onSelectTeam(selection){
    console.log('teamSelected', selection)
    router.push(`/equipes/${selection}`)
    teamsHome.value = false
}



watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    console.log('Ruta cambiada de', oldPath, 'a', newPath)
    // Lógica adicional
    if(newPath === '/equipes'){
        teamsHome.value = true
    } 
  }
)

onMounted(()=>{
  console.log('teams mounted')
  console.log('route full path',route.fullPath)
  if(route.fullPath === '/equipes'){
    console.log('acá home')
    teamsHome.value = true
  }else{
    console.log('acá no home')
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


      <div v-if="teamsHome" class="teams-home flex px-[40px] h-[550px] mt-4 gap-1">
          <div 
          class="flex flex-col w-1/3 bg-[#DB1717]  cursor-pointer"
          @click="onSelectTeam('premiere')"
          >
            <div class="flex h-[50px] justify-center items-center">
              <p class="text-3xl font-medium text-white">US Genève-Ville Première</p>
            </div>
            <div class="flex h-[500px] w-full overflow-hidden relative">
              <img src="/premiere/2017-2018/1er-2017-1.jpg" alt="premiere" class="w-full h-full object-cover object-center">
              <!-- `${import.meta.env.BASE_URL}2017/1er-2017-1.jpg`, -->
            </div>
          </div>

          <div 
          class="flex flex-col w-1/3 bg-[#2c1b18] text-white cursor-pointer"
          @click="onSelectTeam('senior30')"
          
          >

            <div class="flex h-[50px] justify-center items-center">
              <p class="text-3xl font-medium text-white">US Genève-Ville Senior +30</p>
            </div>
            <div class="flex h-[500px] w-full overflow-hidden relative">
              <img src="/senior30/2012-2013/imagen_1011.jpg" alt="premiere" class="w-full h-full object-cover object-center">
              <!-- `${import.meta.env.BASE_URL}2017/1er-2017-1.jpg`, -->
            </div>
         
           
          </div>

          <div class="flex flex-col h-[550px] w-1/3 gap-1">
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
              <!-- <p 
               class="text-3xl font-medium"
              
              >US Genève-Ville Senior +40</p> -->
            </div>
          </div>
      </div>
  
       
    </main>
    <Sponsors />

    <AppFooter />
   
    

</div>


</template>
<style scoped>


</style>