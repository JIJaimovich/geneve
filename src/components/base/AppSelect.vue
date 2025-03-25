<script setup>
import { ref, computed } from 'vue';


const props = defineProps({
    selectOptions: {
        type: Array,
        default: ['2017-2018', '2013-2014',]
    },
    currentOption: {
        type: String,
        default: '2017-2018'
    }

})

const emits = defineEmits(['selectedValue'])

const isVisible = ref(false)

const optionSelected = ref('')

let keyRandom = 1324

const buttonStyle = computed(()=>{
  if(isVisible.value){
    return (`
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    `)
  }else{
    return (`
    border-radius: 24px;
    `)

  }
})

function handleSelection(option){
  //isVisible.value = false
   emits('selectedValue', option)
}


</script>


<template>
  <div class="flex relative select-container"
  
  @click="isVisible=!isVisible"
  >
    <button 
   
    
    :style="buttonStyle"
    class="saison-button flex items-center gap-2">
        <span class="text-lg text-white">Saison</span> 
        <span class="text-lg text-white">{{ currentOption }}</span>
        <img src="../../assets/chevron.svg" alt="chevron" class="w-[20px]">
    </button> 
    <div
    v-if="isVisible"
    class="options-container"
    >
      <div 
      class="date-option flex items-center gap-2"
      @click="option !== currentOption && handleSelection(option)"
      v-for="option in selectOptions">
        <template v-if="option !== currentOption">
          <span class="text-lg text-white">Saison</span> 
          <span class="text-lg text-white">{{ option }}</span>
          <img src="../../assets/date.svg" alt="chevron" class="w-[20px]">        
        </template>    
        <template v-else>
          <span class="text-lg text-[#DB1717]">Saison</span> 
          <span class="text-lg text-[#DB1717]">{{ option }}</span>
          <img src="../../assets/dateAlt.svg" alt="chevron" class="w-[20px]">        
        </template>      
      </div>
    </div>
  </div>
   
</template>

<style scoped>

.saison-button {
  border: 2px solid #DB1717;
  /* border-radius: 24px; */
  padding: 4px 12px;
  background-color: #DB1717;
  
  cursor: pointer;
}

.date-option {
  padding: 4px 12px;
  cursor: pointer;
}

.date-option:hover {
  background-color: #3a2b28;
}

.saison-button:hover {
 
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}


.options-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  top: 100%;
  background-color: #281713;
  color: white;
  overflow: auto;
  z-index: 900;
  padding-top: 4px;
  padding-top: 4px;
}

.select-container {
  width: fit-content;
}

</style>