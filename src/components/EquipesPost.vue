<script setup>
import { ref } from "vue"
/* 

Découvrez nos équipes !
Bienvenue sur le site de l’US Genève ! Notre club, animé par la passion du football et l’esprit d’équipe, est prêt à relever de nouveaux défis cette saison. Que vous soyez joueur, supporter ou simplement curieux, nous vous invitons à explorer nos équipes et à découvrir ceux qui portent fièrement nos couleurs sur le terrain. Rejoignez-nous et plongez au cœur de l’US Genève !

Discover Our Teams!
Welcome to the US Genève website! Our club, driven by passion for football and a strong team spirit, is ready to take on new challenges this season. Whether you’re a player, a supporter, or just curious, we invite you to explore our teams and get to know those who proudly represent our colors on the field. Join us and dive into the heart of US Genève!

*/

const currentYear = new Date().getFullYear()
const seasonYear = ref(`${currentYear}-${currentYear + 1}`)

</script>

<template>

<div class="equipes-container bg-[#F8F7F7] rounded-md h-fit flex flex-col xl:flex-row mx-4 xl:mx-0">
    <div class="equipes-img-container ">
        <img src="/equipes1.jpg" alt="equipes" class="equipes-img"/> 
    </div>
    <div class="equipes-content-container flex flex-col justify-center gap-4 pr-4 xl:pr-8 pl-4 xl:pl-0 pb-4 xl:pb-0">
        <h2 class="equipes-title text-3xl">Découvrez nos équipes !</h2>
        <div class="flex gap-1 text-[#DB1717]">
            <img src="../assets/dateb.svg" alt="date" class="date-icon"/>
            <h3 class="equipes-season text-md">Saison <span>{{ seasonYear }}</span></h3>
        </div>
        <p class="text-lg">
        Bienvenue sur le site de l’US Genève ! Notre club, animé par la passion du football et l’esprit d’équipe, est prêt à relever de nouveaux défis cette saison. Que vous soyez joueur, supporter ou simplement curieux, nous vous invitons à explorer nos équipes et à découvrir ceux qui portent fièrement nos couleurs sur le terrain. Rejoignez-nous et plongez au cœur de l’US Genève!
        </p>
        <router-link to="/equipes">
            <button 
            class="voir-button">Voir</button>
        </router-link>
    </div>
</div>

</template>

<style scoped>

.date-icon {
    width: 18px;
    height: 18px;
}

.voir-button {
    background-color: var(--app-primary-color);
    padding: 4px 24px;
    border-radius: 15px;
    text-transform: uppercase;
    width: fit-content;
    color: white;
    margin-top: 1rem;
}

/* .equipes-container {
    max-width: 1300px;
    display: flex;
    gap: 3rem;
} */

.equipes-container {
    max-width: 100%;
    gap: 3rem;
}

.equipes-img {  
  max-width: 100%;
  height: auto;
  object-fit: contain;
  filter: brightness(80%);
}

@media (min-width: 600px) { 
  .equipes-img {
    max-width: 500px;
  }

  .equipes-container {
    max-width: 500px;
   }
}

@media (min-width: 800px) {
    .equipes-img {
    max-width: 700px;
    }

    .equipes-container {
    max-width: 700px;
    }
}

@media (min-width: 1280px) {    
    .equipes-container {
    max-width: 1300px;
    }
}


</style>