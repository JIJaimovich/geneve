<script setup>
import { ref } from "vue"
/* 
Actualité – Nouvelle communication entre arbitres et joueurs (45 caracteres)
Classement – La bataille pour la première place continue (45 caracteres)
Statistiques – Des chiffres impressionnants cette saison (45 caracteres)

News – New communication between referees and players (45 characters)
Standings – The battle for the top spot continues (45 characters)
Statistics – Impressive numbers recorded this season (45 characters)

E02020
*/

const currentYear = new Date().getFullYear()

const titles = [
"Actualité", 
"Classement", 
"Statistiques", 
]

const contents = [
"Nouvelle communication entre arbitres et joueurs", 
"La bataille pour la première place continue", 
"Des chiffres impressionnants cette saison" 
]

const imgs = [
"/uefa4.jpg",
"/uefa2.jpg",
"/uefa3.jpg",
]

</script>

<template>
    <div class="uefa-container max-w-[1300px] w-full flex flex-col gap-20">
        <h2 class="text-[#E02020] text-3xl">Les dernières news de la planète football pro</h2>
        <div class="posts-container flex justify-between w-full max-w-[1300px] mx-auto">
            <div v-for="n in 3" class="post-container">
                <img :src="imgs[n-1]" alt="uefa" class="post-img rounded-md"/>
                <div class="post-content-container rounded-md">
                    <p class="post-title text-sm leading-none text-center text-[#DB1717]">UEFA</p>
                    <p class="post-content text-center text-base leading-tight">{{ contents[n-1] }}</p>
                    <p class="post-description text-xs text-gray-600">{{ titles[n-1] }} <span>{{ currentYear }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.post-img {
  width: auto;
  max-width: 340px;
  height: auto;
  object-fit: contain;
  filter: brightness(80%);
}

.post-content-container {
    background-color: white;
    width: 300px;
    position: absolute;
    bottom: -50px;
    left: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
}

.post-content {
    max-width: 250px;
}

.post-container { 
    position: relative;
}


/* .posts-container { 
    background-color: red;
} */



</style>