<script setup>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import EquipesPost from '../components/EquipesPost.vue';
import GalleryPost from '../components/GalleryPost.vue';
import Sponsors from '../components/Sponsors.vue';
import UefaPosts from '../components/UefaPosts.vue';
import HeroPost from '../components/HeroPost.vue';


</script>


<template>

<div class="page-container bg-gray-100 shadow-md">
    
    
    <main>
        <div class="hero-container">
            <AppBanner />
            <HeroPost />

        </div>
        
        <div class="sponsor-section">
            <Sponsors />
        </div>

        <div class="equipes-section flex justify-center items-center bg-[#F0EFEF] py-14 lg:py-28">
            <EquipesPost />
        </div>
       

        <div class="uefa-section flex  flex-col justify-center items-center bg-[#EDE6E6] pt-16 pb-28">
            
            <UefaPosts />
        </div>

        <div class="gallery-section flex  flex-col justify-center items-center bg-[#403F3F] py-14 lg:py-28">
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
    min-height: calc(90vh - var(--nav-height));
}

@media (min-width: 700px) {
   
   .hero-container {
       min-height: calc(100vh - var(--nav-height));
   }
}
</style>