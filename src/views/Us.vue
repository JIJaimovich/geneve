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
        description: "Ciro Rapisardi",
        mail: "ciro.rapisardi@usgeneve-ville.com"
    },
    {
        title: "Président",
        description: "Matthias Biancheri",
        mail: "m.biancheri@hotmail.ch"
    },
    {
        title: "Vice-Président",
        description: "Antoine Stanning-Panchaud",
        mail: "apanchaud81@gmail.com"
    },
    {
        title: "Vice-Président",
        description: "Gaetan Vuaillat",
        mail: "gaetan.vuaillat81@gmail.com"
    },
    {
        title: "Trésorier",
        description: "Antoine Stanning-Panchaud",
        mail: "apanchaud81@gmail.com"
    },
    {
        title: "Sponsors",
        description: "Gaetan Vuaillat",
        mail: "gaetan.vuaillat81@gmail.com"
    },
    {
        title: "Directeur technique",
        description: "Issam Srairi",
        mail: "issam.srairi.12@gmail.com"
    },
    {
        title: "Licences des joueurs",
        description: "Issam Srairi",
        mail: "issam.srairi.12@gmail.com"
    },
    {
        title: "Responsable Matériel",
        description: "Roberto Palmas",
        mail: "robi.pamas46@gmail.com"
    },
    {
        title: "Responsable arbitre",
        description: "Anthony Tomasini",
        mail: "a.tomasini@sunrise.ch"
    },
    {
        title: "Responsable des membres",
        description: "André Alexandre Inacio",
        mail: "andre_ina_cio@hotmail.com"
    },
    {
        title: "Head-Coach 1ere équipe",
        description: "André Alexandre Inacio",
        mail: "andre_ina_cio@hotmail.com"
    },
    {
        title: "Head-Coach 1ere équipe",
        description: "Anthony Tomasini",
        mail: "a.tomasini@sunrise.ch"
    },
    {
        title: "Head-Coach Senior + 30",
        description: "Antoine Stanning-Panchaud",
        mail: "apanchaud81@gmail.com"
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
                    <p class="text-sm text-gray-700">{{ item.mail }} </p>
                  </div>
                </div>
              </div> 
            </div>
            
            <div class="flex flex-col w-[60%]  items-start  bg-slate-200 h-fit pb-4">
              <img src="../assets/img/soccer.jpg" alt="soccer" class="soccer-img rounded-t-md">
              <h2 class="text-3xl mt-4 mb-2 px-4">Notre histoire:</h2>
              <p class="text-lg mb-2 px-4"> <span class="font-bold text-[var(--app-primary-color)]">L’Union Sportive Genève-Ville Football Club (USGV)</span> possède une riche histoire qui remonte au 1er juillet 1919, lorsqu’elle fut fondée sous le nom de Union Sportive des Travailleurs de la Ville (UST Ville). Son objectif principal était d’offrir aux travailleurs un espace où ils pouvaient profiter du football et se détendre après de longues journées de travail.</p>
              <p class="text-lg mb-2 px-4">En 1950, la fusion avec le Geneva FCO donna naissance à UST Genève-Ville, qui participa au championnat SATUS. L’un de ses plus grands succès fut de remporter le titre de champion suisse SATUS en 1985.</p>
              <p class="text-lg mb-2 px-4">S’adaptant aux évolutions sociales, en 1991, le club intégra l’Association Cantonale Genevoise de Football (ACGF) ainsi que l’Association Suisse de Football (ASF), adoptant son nom actuel : Union Sportive Genève-Ville Football Club.</p>
              <p class="text-lg mb-2 px-4">Après des années d’entraînement sur le terrain de Varembé, en 1995, le club déménagea au Centre Sportif des Evaux, où il continue aujourd’hui à cultiver sa passion pour le football.</p>
              <p class="text-lg mb-2 px-4">Aujourd’hui, l’USGV est l’un des clubs les plus anciens du canton et de la ville de Genève, perpétuant la tradition et l’esprit sportif qui l’ont vu naître il y a plus d’un siècle.</p>
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