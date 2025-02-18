<template>
  <div class="club-banner">
      <img src="../assets/img/geneve-view.jpg" alt="Geneve" class="geneve-view w-full"/>
      <img src="../assets/img/logo-geneve.png" alt="Geneve" class="logo-geneve" />
  </div>
</template>

<style scoped>

/* .hero-container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--nav-height));
} */

.club-banner {
    position: relative;
    display: inline-block; /* Para que el div se ajuste al tamaño de la imagen */

}


.logo-geneve {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%); /* Solo centra verticalmente */
    height: auto;
    width: 75px;

    
}


@media (min-width: 800px) {
  .logo-geneve {
    width: 100px;
  }
}

@media (min-width: 900px) {
  .logo-geneve {
    width: 125px;
  }
}

@media (min-width: 1100px) {
  .logo-geneve {
    width: 150px;
  }
}

@media (min-width: 1500px) {
  .logo-geneve {
    width: 200px;
  }
}

</style>