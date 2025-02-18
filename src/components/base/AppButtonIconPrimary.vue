<script setup>





const props = defineProps({
    cartActive: {
        type: Number,
        default: 0,
    },
    buttonPadding: {
        type: String,
        default: "8px 12px",
    },
   
    
})

</script>

<template>
<button 
class="button-container ">
    <!-- <div class="img-container">
        <img src="../../assets/cart.svg" alt="Cart" class="cart-icon"/>
    </div> -->
    <div class="img-container">
            <slot name="img"></slot>            
        </div>
    <div class="label-container">
        <slot name="label"></slot>            
    </div>
</button>    

</template>

<style scoped>


.label-container {
    display: flex;
    
    
    align-items: center;
    justify-content: center;
}

.button-container {
   
    min-height: 34px;
    display: flex;
    gap: 4px;
    align-items: center;
    
    
    cursor: pointer;
    
    padding: 0 12px;
    color: rgb(19, 18, 18);
    background-color: rgb(196, 196, 196);
    border-radius: 5px;
    
}

.cart-active {
    border-radius: 8px;
    background-color: rgb(71, 67, 21);
    color: white;
}



</style>