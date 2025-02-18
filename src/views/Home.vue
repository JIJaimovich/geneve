<script setup>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import EquipesPost from '../components/EquipesPost.vue';
import GalleryPost from '../components/GalleryPost.vue';
import Sponsors from '../components/Sponsors.vue';
import UefaPosts from '../components/UefaPosts.vue';
</script>


<template>

<div class="page-container bg-gray-100 shadow-md">
    
    
    <main>
        <div class="hero-container">
            <AppBanner />
            <div class="team-banner">
                <div class="team-card-left">
                    <div class="team-card-container">
                        <h2 class="team-card-title text-3xl font-medium  text-white ">US Genève-Ville 1</h2>
                        <div class="team-card-list flex flex-col gap-4">
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/date.svg" alt="date" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Calendrier des matchs</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/clock.svg" alt="clock" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Horaires des rencontres</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/stadium.svg" alt="stadium" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Lieux des matchs</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/ball.svg" alt="ball" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Prochains adversaires</span>
                            </div>
                    
                        </div>
                        <button class="result-button flex items-center gap-2">
                            <img src="../assets/trophy.svg" alt="trophy" class="team-card-icon"/>    
                            <span class="text-2xl ">Résultat</span>
                        </button>
                    </div>

                </div>
                <div class="team-card-right">

                    <!-- <h2 class="team-card-title">US Genève-Ville-Séniors +30</h2>  <div class="bg-[#F0EFEF] p-4">-->
                    <div class="team-card-container">
                        <h2 class="team-card-title text-3xl font-medium  text-white ">US Genève-Ville-Séniors +30</h2>
                        <div class="team-card-list flex flex-col gap-4">
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/date.svg" alt="date" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Calendrier des matchs</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/clock.svg" alt="clock" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Horaires des rencontres</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/stadium.svg" alt="stadium" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Lieux des matchs</span>
                            </div>
                            <div class="team-card-item flex items-center gap-2 text-white">
                                <img src="../assets/ball.svg" alt="ball" class="team-card-icon"/>    
                                <span class="team-card-span text-2xl ">Prochains adversaires</span>
                            </div>
                    
                        </div>
                        <button class="result-button flex items-center gap-2">
                            <img src="../assets/trophy.svg" alt="trophy" class="team-card-icon"/>    
                            <span class="text-2xl ">Résultat</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        
        <div class="sponsor-section">
            <Sponsors />
        </div>

        <div class="equipes-section flex justify-center items-center bg-[#F0EFEF] h-[75vh]">
            <EquipesPost />
        </div>
       

        <div class="uefa-section flex  flex-col justify-center items-center bg-[#EDE6E6] pt-16 pb-28">
            
            <UefaPosts />
        </div>

        <div class="gallery-section flex  flex-col justify-center items-center bg-[#403F3F] py-28">
            <GalleryPost />
        </div>

        <div class="sponsor-section">
            <Sponsors />
        </div>
    </main>

    <AppFooter />
 
</div>    

</template>

<style scoped>


.hero-container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--nav-height));
}

.team-banner {
    display: flex;
    height: 100%;
    flex: 1;
    
}

.result-button {
    width: fit-content;
    padding: 4px 12px;
    border-radius: 15px;
    border: 2px white solid;
    color: white;
}

.team-card-left, .team-card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
    width: 100%;
    flex: 1;
}

.team-card-left {
    background-color: var(--app-primary-color);
    /* padding-left: 40px; */
}

.team-card-right {
    background-color: var(--app-black-color);
}

.team-card-container {
    
    height: 80%;
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