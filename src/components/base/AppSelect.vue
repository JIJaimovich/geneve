<script setup>
import { ref } from 'vue';


const props = defineProps({
    selectOptions: {
        type: Array,
        default: [1, 2, 3]
    }

})

const emits = defineEmits(['selectedValue'])

const isVisible = ref(false)

const optionSelected = ref('')

let keyRandom = 1324

function handleSelection(option){
    emits('selectedValue', option)
    optionSelected.value = option
}

</script>


<template>
    <div class="select-container bg-neutral-300 rounded-lg"
    @click="isVisible=!isVisible"
    :class="isVisible && 'select-active'"
    
    >
    <!-- <TransitionGroup name="slide"> -->
            <div class="select-dropdown" :key="keyRandom+1" >
                <slot></slot>
            </div>
            <Transition name="slide">
            <div v-if="isVisible" class="select-options" :key="keyRandom+2">
                <div 
                @click="handleSelection(option)"
                class="select-option" 
                v-for="option in selectOptions">
                    <span 
                    :class="optionSelected === option && 'option-active'" 
                    class="pl-16">{{ option }}</span>
                </div>
            </div>
            </Transition>
    <!-- </TransitionGroup> -->
        </div>
</template>

<style scoped>
.select-container {
    position: relative;
    cursor: pointer;
    /* background-color: red; */
    display: flex;
    height: 40px;
    align-items: center;
    
}

.select-dropdown {
    z-index: 999;
}

.option-active {
    /* color: var(--app-primary-color); */
    font-weight: bold;
   
    
}

.select-container:hover {
    
    border-radius: 8px;
}

/* .select-active {
}

background-color: blue; */



.select-options {
    position: absolute;
    top: 44px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 100%;

}

.select-option {
    cursor: pointer;
    height: 40px;
    background-color: #a3a3a3;
    display: flex;
    align-items: center;
}


.select-option:hover {
    background-color: #71717a;

}



.slide-enter-active, .slide-leave-active {
    transition: opacity 0.3s ease;
}
.slide-enter-from {
  
  opacity: 0;
}
.slide-leave-to {
  
  opacity: 1;
}

</style>