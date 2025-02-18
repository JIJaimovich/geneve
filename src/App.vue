<script setup>

import AppHeader from './components/AppHeader.vue';

</script>

<template>
    <AppHeader />
    <router-view v-slot="{ Component }">
      
      <transition name="fade-main">
        <component :is="Component"  />           
      </transition>
    </router-view>
  
</template>

<style scoped>

</style>
