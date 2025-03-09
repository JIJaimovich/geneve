<script setup>
import AppBanner from "../components/AppBanner.vue"

import AppFooter from "../components/AppFooter.vue"

import Sponsors from "../components/Sponsors.vue"


/* 
Fondé en 1919

Équipe dirigeante :

{
    title: "Président d’honneur",
    description: "Ciro Rapisardi"
},

Président d’honneur : Ciro Rapisardi 
Président : Matthias Biancheri 
Vice-Président : Antoine  Stanning-Panchaud 
Vice-Président : Gaetan Vuaillat 
Trésorier : Antoine Stanning-Panchaud 
Sponsors : Gaetan Vuaillat
Directeur technique : Issam Srairi 
Licences des joueurs : Issam Srairi 
Responsable Matériel : Roberto Palmas 
Responsable arbitre : Anthony Tomasini 
Responsable des membres : André Alexandre Inacio 

Head-Coach 1ere équipe : André Alexandre Inacio 
Anthony Tomasini 

Head-Coach Senior + 30 : Antoine Stanning-Panchaud

*/

const autoritiesList = [
    {
        title: "Président d’honneur",
        description: "Ciro Rapisardi"
    },
    {
        title: "Président",
        description: "Matthias Biancheri"
    },
    {
        title: "Vice-Président",
        description: "Antoine Stanning-Panchaud"
    },
    {
        title: "Vice-Président",
        description: "Gaetan Vuaillat"
    },
    {
        title: "Trésorier",
        description: "Antoine Stanning-Panchaud"
    },
    {
        title: "Sponsors",
        description: "Gaetan Vuaillat"
    },
    {
        title: "Directeur technique",
        description: "Issam Srairi"
    },
    {
        title: "Licences des joueurs",
        description: "Issam Srairi"
    },
    {
        title: "Responsable Matériel",
        description: "Roberto Palmas"
    },
    {
        title: "Responsable arbitre",
        description: "Anthony Tomasini"
    },
    {
        title: "Responsable des membres",
        description: "André Alexandre Inacio"
    },
    {
        title: "Head-Coach 1ere équipe",
        description: "André Alexandre Inacio"
    },
    {
        title: "Head-Coach 1ere équipe",
        description: "Anthony Tomasini"
    },
    {
        title: "Head-Coach Senior + 30",
        description: "Antoine Stanning-Panchaud"
    }
]


</script>

<template>
<div class="page-container bg-gray-100 shadow-md">
    
    <main>       
       <AppBanner /> 

       
       <div class="us-container flex flex-col w-full p-[40px] gap-2">        
          
          <h2 class="text-3xl mb-2">Équipe dirigeante:</h2>
          <div class="authorities-section flex w-full gap-4">
          
            <div class="flex flex-col w-[40%]">
              
              <div class="flex flex-col gap-2 ">
                <div 
                v-for="item in autoritiesList" 
                class="flex w-full  bg-slate-200 py-2 px-3 gap-2 rounded">
                <img src="../assets/avatar.svg" alt="avatar" class="avatar-img">
                  <div class="flex flex-col">
                    <p class="text-md font-medium text-gray-900">{{ item.title }}</p>
                    <p class="text-lg">{{ item.description }} </p>
                  </div>
                </div>
              </div> 
            </div>
            
            <div class="flex w-[60%]  items-start">
              <img src="../assets/img/soccer.jpg" alt="soccer" class="soccer-img rounded-md">
            </div>
            
          </div>
       </div>

       <!-- <div class="us-container flex flex-col w-full p-[40px] gap-2">
          
          <h2 class="text-3xl mb-2">Équipe dirigeante:</h2>
          <div class="authorities-section flex w-full gap-4">
          
            <div class="flex flex-col w-[60%]">
              
              <div class="flex flex-col gap-2 ">
                <div 
                v-for="item in autoritiesList" 
                class="flex w-full  bg-slate-200 py-2 px-3 gap-2 rounded">
                  <div class="flex gap-1">
                    <img src="../assets/avatar.svg" alt="avatar" class="avatar-img">
                    <p class="text-lg font-medium">{{ item.title }}:</p>
                  </div>
                  <p class="text-lg">{{ item.description }} </p>
                </div>
              </div> 
            </div>
            
            <div class="flex w-full  bg-slate-300">
              <p>img</p>
            </div>
            
          </div>
       </div> -->

       <Sponsors />
    </main>

    <AppFooter />
   
    

</div>


</template>
<style scoped>
.avatar-img {
  width: 32px;
}

.soccer-img {
  width: 100%;
  height: auto; /* Mantiene la proporción */
  object-fit: contain; /* Asegura que toda la imagen sea visible */
  display: block; /* Evita espacios debajo de la imagen */
  filter: brightness(0.9);
}


</style>