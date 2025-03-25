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


const teams = [
    {
        title: 'US Genève-Ville 1',
        src: 'https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33666&a=trr',
        color: 'bg-[var(--app-primary-color)]',
    },
    {
        title: 'US Genève-Ville-Séniors +30',
        src: 'https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33668&a=trr',
        color: 'bg-[var(--app-black-color)]',
    },
]

const openLink = (team) => {

    if(team === 'US Genève-Ville 1'){        
        window.open('https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33666&a=trr', '_blank');
    }else {        
        window.open('https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33668&a=trr', '_blank');
    }
};

</script>
<template>
    <div 
    v-if="screenWidth > appMd"
    class="team-banner">
        <div 
        v-for="team in teams"
        :class="team.color"
        class="team-card">
            <div class="team-card-container gap-4 xl:min-h-[60%] py-4">
                <h2 class="team-card-title text-2xl lg:text-3xl font-medium  text-white ">{{ team.title }}</h2>
                <div class="team-card-list flex flex-col gap-2 lg:gap-4">
                    <div class="team-card-item flex items-center gap-2 text-white">
                        <img src="../assets/date.svg" alt="date" class="team-card-icon"/>    
                        <span class="team-card-span text-xl lg:text-2xl ">Calendrier des matchs</span>
                    </div>
                    <div class="team-card-item flex items-center gap-2 text-white">
                        <img src="../assets/clock.svg" alt="clock" class="team-card-icon"/>    
                        <span class="team-card-span text-xl lg:text-2xl ">Horaires des rencontres</span>
                    </div>
                    <div class="team-card-item flex items-center gap-2 text-white">
                        <img src="../assets/stadium.svg" alt="stadium" class="team-card-icon"/>    
                        <span class="team-card-span text-xl lg:text-2xl ">Lieux des matchs</span>
                    </div>
                    <div class="team-card-item flex items-center gap-2 text-white">
                        <img src="../assets/ball.svg" alt="ball" class="team-card-icon"/>    
                        <span class="team-card-span text-xl lg:text-2xl ">Prochains adversaires</span>
                    </div>
            
                </div>
                <button 
                class="result-button flex items-center gap-2 mt-2"
                @click="openLink(team.title)"
                >
                    <img src="../assets/trophy.svg" alt="trophy" class="team-card-icon"/>    
                    <span class="text-xl lg:text-2xl ">Résultat</span>
                </button>
            </div>

        </div>
        
    </div>

    <div 
    v-else
    class="team-banner">
        <div 
        v-for="team in teams"
        :class="team.color"
        class="team-card">
            <div class="team-card-container gap-4 xl:min-h-[60%] py-4">
                <h2 class="team-card-title text-2xl lg:text-3xl font-medium  text-white ">{{ team.title }}</h2>
                <div class="team-card-list flex flex-col gap-2 lg:gap-4">
                    <div class="team-card-item flex items-center gap-2 text-white">
                        <img src="../assets/date.svg" alt="date" class="team-card-icon"/>    
                        <span class="team-card-span text-xl lg:text-2xl ">Jours et horaires</span>
                    </div>
                    <div class="team-card-item flex items-center gap-2 text-white">
												<img src="../assets/stadium.svg" alt="stadium" class="team-card-icon"/>     
                        <span class="team-card-span text-xl lg:text-2xl ">Adversaires et stades</span>
                    </div>
                    
            
                </div>
                <button 
                class="result-button flex items-center gap-2 mt-2">
                    <img src="../assets/trophy.svg" alt="trophy" class="team-card-icon"/>    
                    <span class="text-xl lg:text-2xl ">Résultat</span>
                </button>
            </div>

        </div>
        
    </div>
</template>

<style scoped>


.team-banner {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;   
}

@media (min-width: 1024px) {
    .team-banner {
        display: flex;
        flex-direction: row;
    }
}



.result-button {
    width: fit-content;
    padding: 4px 12px;
    border-radius: 15px;
    border: 2px white solid;
    color: white;
}




.team-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
    width: 100%;
    flex: 1;
}

/* .team-card-left {
    background-color: var(--app-primary-color);
} */

/* .team-card-right {
    background-color: var(--app-black-color);
} */

.team-card-container {
    
    /* height: 80%; */
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    
    justify-content: space-around;
}


.team-card-icon {
    width: 24px;
    height: 24px;
}

</style>