
<template>
    <button class="primary-button">
        <slot></slot>
    </button>
</template>

<style scoped>
.primary-button {
    color: #131212;
    background-color: rgb(196, 196, 196);
    border-radius: 5px;
    height: fit-content;  
    padding: 6px 24px;
}
</style>