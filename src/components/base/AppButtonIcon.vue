<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    cartActive: {
        type: Number,
        default: 0,
    },
    buttonPadding: {
        type: String,
        default: "8px 12px",
    },
    triggerPulse: {
    type: Boolean,
    default: false,
    },
    iconOnly: {
        type: Boolean,
        default: false,
    },
    
})

// State
const isAnimating = ref(false);


</script>

<template>
<div 
:class="[
    cartActive > 0 && 'cart-active',
    ]"
class="button-container pulse-button">
    <!-- <div class="img-container">
        <img src="../../assets/cart.svg" alt="Cart" class="cart-icon"/>
    </div> -->
    
        <slot name="img"></slot>            
    
    
    <slot name="label" v-if="!iconOnly"></slot>            
</div>    

</template>

<style scoped>
.cart-icon {
    width: 20px;
    height: 20px;
    color: white;
    
}

.button-container {
   
    display: flex;
    gap: 6px;
    align-items: center;
    padding: v-bind(buttonPadding);
    
    cursor: pointer;
    
}

.cart-active {
    border-radius: 8px;
    background-color: rgb(71, 67, 21);
    color: white;
}


/* .pulse-button {
 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
} */

.pulse-active {
  animation: pulse 1.5s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>