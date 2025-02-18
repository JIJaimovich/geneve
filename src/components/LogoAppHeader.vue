<script setup>

</script>
<template>

    <img src="../assets/food.svg" class="logo-svg" alt="Vite logo"/>
    <!-- <img src="../assets/spt-logo-circle.png" class="logo" alt="Vite logo"/> -->
    <!-- <div class="logo-container">
      <span class="brand-logo">SPT</span>
    </div>  -->

      <!-- <div class="brand-container">
        <span class="brand-logo">SPT</span>
        <span class="brand-city">ROSARIO</span>
      </div> -->


</template>

<style>

/* .logo {
  width: 3em;
} */

/* .logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0;
  background-color: rgb(245, 245, 245);
  border: 2px solid #cea60fff;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
} */

.brand-container {
  display: flex;
  flex-direction: column;
}

.brand-city {
  font-size: 12px;
}

.brand-logo {
  font-size: 24px;
  font-weight: 600;
  color: rgb(206, 166, 15);
  /* text-shadow:
    -1px -1px 0 rgb(56, 56, 56),
    1px -1px 0 rgb(56, 56, 56),
    -1px 1px 0 rgb(56, 56, 56),
    1px 1px 0 rgb(56, 56, 56); */
  letter-spacing: 2px;
}



.logo-svg {
  height: 2em;
  /* padding: 1.5em; */
  will-change: filter;
  transition: filter 300ms;
  /* color: #ffffff; */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>