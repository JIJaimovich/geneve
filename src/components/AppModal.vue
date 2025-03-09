<template>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
          <div class="bg-black/50 rounded-2xl shadow-lg p-8 w-full max-w-4xl max-h-[90vh] relative">
            <button @click="closeModal" class="absolute top-2 right-2">
              <img src="../assets/close.svg" alt="close" class="w-[26px]">
            </button>
            <slot></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>

  
  const props = defineProps({
    isOpen: Boolean,
  });
  
  const emit = defineEmits(["close"]);
  
  const closeModal = () => {
    emit("close");
  };
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  