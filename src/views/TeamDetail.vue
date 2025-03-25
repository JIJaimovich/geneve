<script setup>
import { computed, watch, ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';


import ImgGallery from "../components/ImgGallery.vue"

import AppSelect from '../components/base/AppSelect.vue';

import FootballField from '../components/FootballField.vue'


const route = useRoute()
const router = useRouter()
import {
  teamsSeasons,
  premiere2017,
  premiere2014,
  //senior402017,
  senior302013,
  senior302010,
  deuxemie2013,
  deuxemie2012,
} from '../components/data';

const teamId = computed(() => route.params.teamId);




const teams = [
{ title: 'premiere', value: 'Première'},
{ title: 'senior30', value: 'Senior +30'},
{ title: 'histoire', value: 'Histoire'},

]



const currentSeason =ref('')
const optionSeason = ref([])
const currentImgs = ref([])
const nextOn = ref(false)
const prevOn = ref(false)

const paginatedData = ref([])
let currentPage = 0
let limitPage = 0


function handleRouter(teamSelected){
 
  if(teamId.value === teamSelected.title){
    return
  }

  currentPage = 0
  limitPage = 0
  nextOn.value = false 
  prevOn.value = false
  router.push(`/equipes/${teamSelected.title}`)  
  if(teamSelected.title === 'premiere'){    
    currentSeason.value = teamsSeasons.premiere[0]
    optionSeason.value = teamsSeasons.premiere
    paginatedData.value = paginateArray(premiere2017.value)
  }
  else if(teamSelected.title === 'senior30'){ 
    currentSeason.value = teamsSeasons.senior30[0]
    optionSeason.value = teamsSeasons.senior30   
    paginatedData.value = paginateArray(senior302013.value)
  }
  else if(teamSelected.title === 'histoire'){    
    currentSeason.value = teamsSeasons.deuxemie[0]
    optionSeason.value = teamsSeasons.deuxemie
    paginatedData.value = paginateArray(deuxemie2013.value)
  }
  
  setFirstPage()
  

}


function paginateArray(arr, pageSize = pageQty.value) {
  const pages = [];
  
  for (let i = 0; i < arr.length; i += pageSize) {
    let chunk = arr.slice(i, i + pageSize);
    
    while (chunk.length < pageSize) {
      chunk.push("");
    }

    pages.push(chunk);
  }

  return pages;
}

function setFirstPage(){
  if(paginatedData.value){
    currentImgs.value = paginatedData.value[0]

    currentPage = 0
    limitPage = paginatedData.value.length - 1

    if(limitPage > 0){
      nextOn.value = true
    }

  }
}

onMounted(()=>{

  
  if(teamId.value && teamId.value === 'premiere'){
    
    currentSeason.value = teamsSeasons.premiere[0]
    optionSeason.value = teamsSeasons.premiere
    paginatedData.value = paginateArray(premiere2017.value)

  }
  else if(teamId.value && teamId.value === 'senior30'){
    
    currentSeason.value = teamsSeasons.senior30[0]
    optionSeason.value = teamsSeasons.senior30

    paginatedData.value = paginateArray(senior302013.value)

  }
 
  else if(teamId.value && teamId.value === 'histoire'){
    
    currentSeason.value = teamsSeasons.deuxemie[0]
    optionSeason.value = teamsSeasons.deuxemie


    paginatedData.value = paginateArray(deuxemie2013.value)

  }
  

  setFirstPage()
  

})

function handleGalleryControls(b){
  
  if(b === 'prev'){
    if(currentPage - 1 >= 0){
      currentImgs.value = paginatedData.value[currentPage - 1]
      currentPage = currentPage - 1
      
      if(!nextOn.value){
        nextOn.value = true
      }
    }
    if (currentPage === 0){
      prevOn.value = false
    }

  }else if(b === 'next'){
    

    
    if(currentPage + 1 <= limitPage){
      currentImgs.value = paginatedData.value[currentPage + 1]
      currentPage = currentPage + 1
      
      if(!prevOn.value){
        prevOn.value = true
      }
    }
    if (currentPage === limitPage){
      nextOn.value = false
    }

  }
}

function handleYearSelection(selected){
  
  currentPage = 0
  limitPage = 0
  nextOn.value = false 
  prevOn.value = false

  if(teamId.value && teamId.value === 'premiere' && selected === '2014-2015' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(premiere2014.value)
    setFirstPage()
  }
 
  else if(teamId.value && teamId.value === 'premiere' && selected === '2017-2018' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(premiere2017.value)
    setFirstPage()
  }

  else if(teamId.value && teamId.value === 'senior30' && selected === '2012-2013' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(senior302013.value)
    setFirstPage()
  }

  else if(teamId.value && teamId.value === 'senior30' && selected === '2010-2011' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(senior302010.value)
    setFirstPage()
  }
  //deuxieme
  else if(teamId.value && teamId.value === 'histoire' && selected === '2013-2014' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(deuxemie2013.value)
    setFirstPage()
  }
  //deuxemie2012
  else if(teamId.value && teamId.value === 'histoire' && selected === '2012-2013' ){
    currentSeason.value = selected
    paginatedData.value = paginateArray(deuxemie2012.value)
    setFirstPage()
  }
}


// screen width
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

const appLg = 1280

const pageQty = ref(screenWidth.value > appLg ? 6 : screenWidth.value < appLg && screenWidth.value > 700 ? 4 : 2)

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});


const openLink = (team) => {

if(team === 'premiere'){        
    window.open('https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33666&a=trr', '_blank');
}else {        
    window.open('https://matchcenter.acgf.ch/default.aspx?v=860&oid=14&lng=2&t=33668&a=trr', '_blank');
}
};

</script>

<template>

    <div class="flex flex-col xl:flex-row min-h-[500px] px-2 lg:px-[40px] w-full">
      <div class="flex flex-col w-full xl:w-3/4">
        <!-- team bar -->
        <div class="
        flex 
        flex-col 
        md:flex-row 
        justify-between 
        border-b-4 
        pt-6 
        pb-3 
        border-[var(--app-primary-color)] 
        h-fit 
        gap-2
        md:gap-0
        md:h-[80px] 
        mb-4">
          <h2 class="text-2xl xl:text-3xl font-medium">US Genève-Ville 
            <span class="text-[var(--app-primary-color)]">
             {{teams.find(team => team.title === teamId)?.value || "No encontrado"}}
            </span> 
          </h2>
          
          <AppSelect 
          :current-option="currentSeason"
          :select-options="optionSeason"
          @selected-value="handleYearSelection"
          />
        </div>
        <!-- imgs container -->
      

           <ImgGallery 
           v-if="currentImgs"
           :screen-size="screenWidth > appLg ? 'lg' : screenWidth < appLg && screenWidth > 700 ? 'md' : 'sm'"
           :images="currentImgs" 
           :next-on="nextOn"
           :prev-on="prevOn"
           @controls="(b)=>handleGalleryControls(b)"
           />
     
        
    
      </div>
  <!-- teams container -->
  
      <div class="flex flex-col items-center w-full xl:w-1/4 pt-4 xl:pt-[80px] gap-6 xl:gap-[60px] relative">        
        <div 
        class="
        flex 
        flex-col
        md:flex-row 
        xl:flex-col 
        w-full 
        xl:w-fit 
        justify-between 
        xl:justify-center 
        xl:py-8 
        xl:px-12
        p-6
        bg-lime-200
        xl:bg-transparent
        gap-5 
        rounded 
        relative
        xl:absolute 
        xl:z-10 
        xl:h-[300px]">          
          <div 
          v-for="team in teams"
          class="flex  gap-2 cursor-pointer">
            <template v-if="team.title === teamId">
              <div 
              class="flex  gap-2 border-b-[3px] border-[var(--app-primary-color)]"
              @click="handleRouter(team)">

                <img src="../assets/ballSel.svg" alt="ball" class="w-[24px]">
                <p 
                class="text-lg xl:text-xl uppercase tracking-wide"
                >{{ team.value }} </p>
              </div>
            </template>
            <template v-else>
              <div class="flex  gap-2"
              @click="handleRouter(team)">
                <img src="../assets/ballAlt.svg" alt="ball" class="w-[24px]">
                <p class="text-xl uppercase tracking-wide">{{ team.value }}</p>              
              </div>
                
            </template>
          </div>
        </div>

        <FootballField v-if="screenWidth > appLg"/>

        <div 
        v-if="teamId === 'premiere' || teamId === 'senior30'"
        class="
        flex
        flex-row 
        xl:flex-col 
        items-center 
        w-full 
        xl:w-[240px] 
        gap-2 
        
        bg-[#403F3F] 
        p-6 
        border-4 
        border-[var(--app-primary-color)]">
          <div class="flex flex-col md:flex-row xl:flex-col w-full justify-between  gap-2">
            <div class="flex flex-col md:flex-row xl:flex-col gap-1 md:gap-2 xl:gap-0">
              <p class="text-xl font-medium  text-white ">US Genève-Ville</p>
              <span class="text-xl font-medium text-[var(--app-primary-color)]">
                 {{teams.find(team => team.title === teamId)?.value || "No encontrado"}}
              </span> 
            </div>
            <div  v-if="screenWidth > appLg || screenWidth < 600" class="flex flex-col gap-1 mb-2">
                <div class="team-card-item flex items-center gap-2 text-white">
                    <img src="../assets/date.svg" alt="date" class="team-card-icon"/>    
                    <span class="team-card-span text-lg ">Calendrier</span>
                </div>
                <div class="team-card-item flex items-center gap-2 text-white">
                    <img src="../assets/clock.svg" alt="clock" class="team-card-icon"/>    
                    <span class="team-card-span text-lg ">Horaires</span>
                </div>
                <div class="team-card-item flex items-center gap-2 text-white">
                    <img src="../assets/stadium.svg" alt="stadium" class="team-card-icon"/>    
                    <span class="team-card-span text-lg ">Lieux</span>
                </div>
                <div class="team-card-item flex items-center gap-2 text-white">
                    <img src="../assets/ball.svg" alt="ball" class="team-card-icon"/>    
                    <span class="team-card-span text-lg ">Adversaires</span>
                </div>
        
            </div>
            <button 
            @click="openLink(teamId)"
            class="result-button flex items-center gap-1">
                <img src="../assets/trophy.svg" alt="trophy" class="team-card-icon"/>    
                <span class="text-lg">Résultat</span>
            </button>
          </div>
          </div>
      </div>

    </div>

   
    

    
  

</template>

<style scoped>
/* .saison-button {
  border: 2px solid #DB1717;
  border-radius: 50px;
  padding: 4px 12px;
  background-color: #DB1717;
} */

.team-card-icon {
    width: 20px;
    height: 20px;
}

.result-button {
    width: fit-content;
    padding: 2px 8px;
    border-radius: 15px;
    border: 2px white solid;
    color: white;
}
</style>