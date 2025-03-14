<script setup>
import { computed, watch, ref, onMounted } from 'vue';
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

console.log('Team ID:', teamId.value)


const teams = [
{ title: 'premiere', value: 'Première'},
{ title: 'senior30', value: 'Senior +30'},
// { title: 'deuxieme', value: 'Deuxième'},
// { title: 'senior40', value: 'Senior +40'},
{ title: 'histoire', value: 'Histoire'},

]

//Seniors
let teamDetails = true



  const currentSeason =ref('')
  const optionSeason = ref([])
  const currentImgs = ref([])
  const nextOn = ref(false)
  const prevOn = ref(false)
  
  const paginatedData = ref([])
  let currentPage = 0
  let limitPage = 0

// Watch para detectar cambios en teamId
// watch(() => route.params.teamId, (newVal, oldVal) => {
//   console.log("teamId cambió:", oldVal, "→", newVal);
// });

function handleRouter(teamSelected){
  console.log('team id', teamId.value)
  console.log('team selected', teamSelected)
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
  // else if(teamSelected.title === 'senior40'){ 
  //   currentSeason.value = teamsSeasons.senior40[0]
  //   optionSeason.value = teamsSeasons.senior40   
  //   paginatedData.value = paginateArray(senior402017.value)
  // }
  else if(teamSelected.title === 'histoire'){    
    currentSeason.value = teamsSeasons.deuxemie[0]
    optionSeason.value = teamsSeasons.deuxemie
    paginatedData.value = paginateArray(deuxemie2013.value)
  }
  
  setFirstPage()
  

}





function paginateArray(arr, pageSize = 6) {
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
  console.log('TeamDetail mounted')
  
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
  // else if(teamId.value && teamId.value === 'senior40'){
    
  //   currentSeason.value = teamsSeasons.senior40[0]
  //   optionSeason.value = teamsSeasons.senior40


  //   paginatedData.value = paginateArray(senior402017.value)

  // }
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
      console.log('new current', currentPage)
      if(!nextOn.value){
        nextOn.value = true
      }
    }
    if (currentPage === 0){
      prevOn.value = false
    }

  }else if(b === 'next'){
    // console.log('***')
    // console.log(paginatedData.value)
    // console.log(paginatedData.value.length)
    // console.log(currentPage)
    // console.log(limitPage)

    
    if(currentPage + 1 <= limitPage){
      currentImgs.value = paginatedData.value[currentPage + 1]
      currentPage = currentPage + 1
      console.log('new current', currentPage)
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
  console.log('selected emited', selected)
  console.log('teamId', teamId.value )
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

</script>

<template>

    <div class="flex min-h-[500px] px-[40px] w-full">
      <div class="flex flex-col w-3/4">
        <!-- team bar -->
        <div class="flex justify-between border-b-4 pt-6 pb-3 border-[var(--app-primary-color)] h-[80px] mb-4">
          <h2 class="text-3xl font-medium">US Genève-Ville 
            <span class="text-[var(--app-primary-color)]">
              {{teams.find(team => team.title === teamId)?.value || "No encontrado"}}
            </span> 
          </h2>
          <!-- <div class="saison-button flex items-center gap-2 ">
            <span class="text-lg text-white">Saison</span> 
            <span class="text-lg text-white">2017-2018</span>
            <img src="../assets/chevron.svg" alt="chevron" class="w-[20px]">
          </div> -->
          <AppSelect 
          :current-option="currentSeason"
          :select-options="optionSeason"
          @selected-value="handleYearSelection"
          />
        </div>
        <!-- imgs container -->
      

           <ImgGallery 
           v-if="currentImgs"
           :images="currentImgs" 
           :next-on="nextOn"
           :prev-on="prevOn"
           @controls="(b)=>handleGalleryControls(b)"
           />
     
        
    
      </div>
  <!-- teams container -->
   <!-- class="flex justify-center  w-1/4 pt-[80px] relative" -->
      <div class="flex flex-col items-center w-1/4 pt-[80px] gap-[60px] relative">        
        <div class="flex flex-col justify-center py-8 px-12 gap-5 rounded absolute z-10 h-[300px]">          
          <div 
          v-for="team in teams"
          class="flex  gap-2 cursor-pointer">
            <template v-if="team.title === teamId">
              <div 
              class="flex  gap-2 border-b-[3px] border-[var(--app-primary-color)]"
              @click="handleRouter(team)">

                <img src="../assets/ballSel.svg" alt="ball" class="w-[24px]">
                <p 
                class="text-xl uppercase tracking-wide"
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

        <FootballField />

        <div 
        v-if="teamId === 'premiere' || teamId === 'senior30'"
        class="flex flex-col items-center w-[240px] gap-2 bg-[#403F3F] p-6 border-4 border-[var(--app-primary-color)]">
          <div class="flex flex-col gap-2">
            <div>
              <p class="text-xl font-medium  text-white ">US Genève-Ville</p>
              <span class="text-xl font-medium text-[var(--app-primary-color)]">
                 {{teams.find(team => team.title === teamId)?.value || "No encontrado"}}
              </span> 
            </div>
            <div class="flex flex-col gap-1 mb-2">
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
            <button class="result-button flex items-center gap-1">
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