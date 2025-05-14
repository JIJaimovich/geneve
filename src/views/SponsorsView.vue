<script setup>
import { ref } from "vue"
import AppBanner from "../components/AppBanner.vue"

import AppFooter from "../components/AppFooter.vue"

import Sponsors from "../components/Sponsors.vue"


const sponsorsList = ref([

  {
    name: 'DALLOYEAU',
    url: `${import.meta.env.BASE_URL}dalloy.png`,
    description: "Entreprise familiale également spécialisée dans le domaine Sanitaire, Didier Dalloyeau, fondateur de l’entreprise et son fils Norman, ont récemment fêté leurs dix ans d’existence. Ils sauront vous apporter leur expertise pour mener à bien vos plus beaux projets. Avenantes et sérieuses, leurs équipes vous apporteront à n’en pas douter satisfaction.",
    link: "https://www.dalloyeau.ch/",
    more: "",
    opened: false,
  },
  {
    name: 'Autocolor',
    url: `${import.meta.env.BASE_URL}autocw.png`,
    description: "AUTOCOLOR sarl concrétise son engagement en faveur de l’environnement par de nombreuses initiatives. L’entreprise est consciente que son domaine d’activités lié aux peintures automobiles, industrielles et aux activités polluantes assimilées peut porter atteinte à l’environnement.",
    link: "https://autocolorshop.com/",
    more: "Nous mettons tout en œuvre pour réduire les impacts au maximum et établir des règles de développement durable au sein du magasin mais aussi sous forme de conseils à la clientèle. En recherche d’amélioration perpétuelle, AUTOCOLOR sarl intègre dans sa gestion les principes de développement durable suivants : Tenir à jour le « Plan d’Action lié au Développement Durable » évolutif et consultable par tous. Ce document regroupe toutes les actions courantes et futures à réaliser. S’assurer que le personnel soit correctement formé et informé pour exercer ses activités de manière responsable envers l’environnement. Informer la clientèle aux risques liés à l’utilisation des produits envers l’environnement et l’utilisateur. Proposer des alternatives à la clientèle en démontrant les avantages écologiques d’un produits par rapport à un autre. Inciter au maximum l’utilisation de peintures à l’eau envers les professionnels et les particuliers. A cet égard, une fiche « Peintures à l’eau » est consultable Stocker de manière sure les produits dangereux ainsi que les déchets souillés et faciliter leur évacuation vers les filières de traitement. Réduire au maximum les produits de Classe de toxicité n°4 en faveur de la classe n°3 moins polluante. A cet égard, une fiche « Produits de classe 4 » est consultable. Promouvoir une écologie de bureaux via le tri sélectif des déchets. S’inscrire dans la vie locale Carougeoise et Genevoise par des actions de parrainage, de publicité et via l’association « Intérêts de Carouge ».", 

    opened: false,
  },
  {
    name: 'Despraz S.A.',
    url: `${import.meta.env.BASE_URL}desprazsa.png`,
    link: 'https://desprazsa.ch/',
    description: "Entreprise familiale agissant dans le domaine de transfert et production d’Energie dans l’industrie depuis 1988, vous pourrez faire appel aux services de Mathieu Despraz et de Mathieu Tinguely pour mener à bien vos projets. Réactive et sérieuse, l’entreprise Despraz vous aidera dans vos projets les plus complexes.",
    more: "",
    opened: false,
  },

  {
    name: 'Tapernoux S.A.',
    url: `${import.meta.env.BASE_URL}tapernoux.png`,
    description: "Entreprise familiale spécialisée dans le domaine Sanitaire à qui vous pourrez confier vos petits projets jusqu’aux plus grands. De l’initiation via leur bureau d’étude à la réalisation par leurs équipes de terrain, Vincent Baudet et Alexandre Fontana (Directeurs) sauront trouver la ou les solutions pour concrétiser vos rêves les plus fous.",
    link: 'https://tapernoux-sa.ch/',
    more: "",
    opened: false,

  },

  {
    name: 'H2O',
    url: `${import.meta.env.BASE_URL}h20.png`,
    description: "Entreprise spécialisée dans le traitement des eaux, plus de secret pour cette entreprise qui saura s’occuper de votre piscine aussi bien que de votre eau de consommation. Equipe jeune et dynamique, la satisfaction client reste leur priorité.",
    link: "https://www.h2o-f.ch/",
    more: "",
    opened: false,
  },
  
  {
    name: 'VIANSONE',
    url: `${import.meta.env.BASE_URL}viamonte.png`,
    description: "Entreprise spécialisée dans la protection incendie, vous pouvez faire confiance aux équipes de Bernard Durussel pour mener vos différents chantiers. De l’élaboration via leur bureau d’étude à la réalisation de vos projets, VIANSONE saura répondre à vos attentes.",
    link: 'https://viansone.ch/',
    more: "",
    opened: false,
  },
  

  
  {
    name: 'Techbat',
    url: `${import.meta.env.BASE_URL}techbat.png`,
    description: "Besoin de matériaux dans le domaine Sanitaire ? N’hésitez pas à faire appel aux services de Stéphane Gaelher et de ses équipes. Leur professionnalisme et leur recherche constante de solution vous aideront dans vos différents projets. Entreprise familiale également spécialisée dans les aménagements extérieurs.",
    link: "",
    more: "",
    opened: false,
  },
  {
    name: 'Kublai Vision Consultancy',
    url: `${import.meta.env.BASE_URL}kublaiv.png`,
    description: "Nous sommes un cabinet de conseil en services numériques, dédié à accompagner les entreprises dans leur transformation digitale. Notre expertise couvre un large éventail de solutions sur mesure, notamment :",

    link: "https://www.kublai-vision.de/",
    more: "Développement de sites web modernes, fonctionnels et adaptés aux besoins de chaque client. Gestion des réseaux sociaux, incluant la création de contenu, la planification stratégique et l'engagement communautaire. Photographie et vidéo institutionnelles, avec un accent sur la qualité visuelle et la cohérence de marque. Montage et postproduction vidéo, pour des contenus professionnels et percutants. Développement d'applications, intuitives, performantes et adaptées à différents supports. Chez Kublai Vision, nous combinons créativité, technologie et stratégie pour offrir des résultats concrets et durables à nos clients.",

    opened: false,
  },




  

  

])

const openLink = (link) => {
  window.open(link, '_blank')
}


</script>

<template>
  <div class="page-container bg-[#EDE6E6] shadow-md">
    
    <main>       
      <AppBanner /> 
      <!-- Sponsors Add 
       bg-yellow-100
      -->
      <div class="sponsors-add flex flex-col w-full px-2 py-3 lg:py-0 xl:p-[40px] bg-gray-100"> 
         <h2 class="text-3xl mb-2 px-4">Sponsorship Opportunities</h2>
         <p class="text-lg mb-2 px-4"> <span class="font-bold text-[var(--app-primary-color)]">US Genève-Ville Football Club</span> offers companies an effective platform to increase their visibility within the local sports community.</p>
         <p class="text-lg mb-2 px-4"> In addition to our standard sponsorship packages, we are open to developing tailored solutions that align with each sponsor’s specific objectives.</p>
         
         <h3 class="text-2xl mt-4 mb-2 px-4">Benefits for Sponsors</h3>
         <div class="flex flex-col lg:flex-row gap-4">  
           <div class="flex flex-col  w-full items-center border rounded-xl shadow-md p-8 bg-red-300 gap-3">
             <img src="../assets/visibility.svg" alt="avatar" class="icon-img">
             <div class="flex flex-col items-center justify-center gap-1">
               <p class="font-medium text-xl text-center">Visibility on the official website</p>
               <p class="text-lg text-center"> Inclusion of your company logo and a direct link to your site.</p>
             </div>
           </div>
           <div class="flex flex-col w-full items-center  border rounded-xl shadow-md p-8 bg-red-300 gap-3">
             <img src="../assets/exposure.svg" alt="avatar" class="icon-img">
             <div class="flex flex-col items-center justify-center gap-1">
               <p class="font-medium text-xl text-center">Brand exposure through official equipment</p>
               <p class="text-lg text-center"> Your logo featured on match jerseys, training apparel, and team bags.</p>
             </div>
           </div>
           <!-- <div class="flex w-full items-center border rounded-xl shadow-md p-8 bg-white gap-4" >
             <img src="../assets/avatar.svg" alt="avatar" class="icon-img">
             <div class="flex items-center justify-center h-[28px]">
               <p class="text-lg px-2"><span class="font-medium">Brand exposure through official equipment:</span> your logo featured on match jerseys, training apparel, and team bags.</p>
             </div>
       
           </div> -->
         </div>
      
         <!-- <div class="flex w-full items-center mb-2 px-4" >
           <img src="../assets/avatar.svg" alt="avatar" class="icon-img">
           <div class="flex items-center justify-center h-[28px]">
             <p class="text-lg px-2"><span class="font-medium">Please note:</span> Due to logistical limitations, we are currently unable to offer traditional advertising visibility during games (such as billboards around the stadium).</p>
           </div>
      
         </div>
         
         border rounded-xl shadow-md p-8 bg-white
         -->
      
         <p class="text-lg mb-2 px-4 mt-8"><span class="font-medium text-gray-700">Please note:</span> Due to logistical limitations, we are currently unable to offer traditional advertising visibility during games (such as billboards around the stadium).</p>
         <p class="text-lg mb-2 px-4">If you are interested in supporting US Genève-Ville Football Club and would like to learn more about our sponsorship opportunities, please contact us:</p>
         
         <div class="flex flex-col lg:flex-row w-full gap-4 my-3">
           <div class="flex flex-col gap-4 w-full">
                 <div                 
                 class="flex w-full  border rounded-xl shadow-md p-8 bg-white gap-4">
                   <img src="../assets/contactAlt.svg" alt="avatar" class="icon-img">
                   <div class="flex flex-col">
                     <p class="text-md font-medium text-gray-900">General inquiries:</p>
                     <p class="text-lg  text-gray-700">usgeneve-ville@usgeneve-ville.com</p>                
                   </div>
                 </div>
           </div>
      
           <div class="flex flex-col gap-2 w-full">
                 <div                 
                 class="flex w-full border rounded-xl shadow-md p-8 bg-white gap-4">
                   <img src="../assets/avatarAlt.svg" alt="avatar" class="icon-img">
                   <div class="flex flex-col">
                     <p class="text-md font-medium text-gray-900">Gaëtan Vuaillat <span class="text-sm text-gray-500">Vice-President & Sponsorship Manager</span></p>
                     <p class="text-lg  text-gray-700">gaetan.vuaillat81@gmail.com</p>                
                   </div>
                 </div>
           </div>
      
           <div class="flex flex-col gap-2 w-full">
                 <div                 
                 class="flex w-full  border rounded-xl shadow-md p-8 bg-white gap-4">
                   <img src="../assets/location.svg" alt="place" class="icon-img">
                   <div class="flex flex-col">
                     <p class="text-md font-medium text-gray-900">Address</p>
                     <p class="text-lg  text-gray-700"> 33 Avenue du Bois de la Chapelle 1213 Onex </p>                
                   </div>
                 </div>
           </div> 
           
         </div>
      
        
       </div>
       
       <div class="flex-row lg:flex-row w-full px-2 py-4 xl:p-[40px] gap-[50px]">
        <!-- Sponsors gallery -->
        
        <div class="sponsors-gallery flex flex-col gap-4 lg:gap-24">
          <div v-for="sponsor in sponsorsList" 
          :class="sponsor.opened ? 'items-start' : 'items-center'"
          class="sponsor-card flex flex-col  lg:flex-row-reverse border rounded-xl shadow-md p-8 bg-white gap-6 lg:gap-0">
          <img :src="sponsor.url" alt="" class="w-[200%]">
          <div class="flex flex-col gap-4 max-w-[600px]">
            <h3 class="card-title text-2xl lg:text-3xl">{{ sponsor.name }}</h3>            
            <p class="card-content text-base lg:text-lg lg:w-3/4">{{ sponsor.description }}</p>
            
            <template v-if="sponsor.more">
              <template v-if="!sponsor.opened">
                <span @click="sponsor.opened=true" class="text-[#DB1717] cursor-pointer">Read more</span>
              </template>
              <!-- 'Kublai Vision Consultancy' -->
              <template v-if="sponsor.opened && sponsor.name === 'Autocolor'">
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Nous mettons tout en œuvre pour réduire les impacts au maximum et établir des règles de développement durable au sein du magasin mais aussi sous forme de conseils à la clientèle. En recherche d’amélioration perpétuelle, AUTOCOLOR sarl intègre dans sa gestion les principes de développement durable suivants :</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Tenir à jour le « Plan d’Action lié au Développement Durable » évolutif et consultable par tous. Ce document regroupe toutes les actions courantes et futures à réaliser. S’assurer que le personnel soit correctement formé et informé pour exercer ses activités de manière responsable envers l’environnement. </p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Informer la clientèle aux risques liés à l’utilisation des produits envers l’environnement et l’utilisateur.</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Proposer des alternatives à la clientèle en démontrant les avantages écologiques d’un produits par rapport à un autre.</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Inciter au maximum l’utilisation de peintures à l’eau envers les professionnels et les particuliers. A cet égard, une fiche « Peintures à l’eau » est consultable Stocker de manière sure les produits dangereux ainsi que les déchets souillés et faciliter leur évacuation vers les filières de traitement. </p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Réduire au maximum les produits de Classe de toxicité n°4 en faveur de la classe n°3 moins polluante. A cet égard, une fiche « Produits de classe 4 » est consultable. Promouvoir une écologie de bureaux via le tri sélectif des déchets. S’inscrire dans la vie locale Carougeoise et Genevoise par des actions de parrainage, de publicité et via l’association « Intérêts de Carouge ». </p>
              </template>
              <template v-if="sponsor.opened && sponsor.name === 'Kublai Vision Consultancy'">
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words"><span class="font-bold">Développement de sites web</span> modernes, fonctionnels et adaptés aux besoins de chaque client</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words"><span class="font-bold">Gestion des réseaux sociaux</span>, incluant la création de contenu, la planification stratégique et l'engagement communautaire</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words"><span class="font-bold">Photographie et vidéo institutionnelles</span>, avec un accent sur la qualité visuelle et la cohérence de marque</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words"><span class="font-bold">Montage et postproduction vidéo</span>, pour des contenus professionnels et percutants</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words"><span class="font-bold">Développement d'applications</span> intuitives, performantes et adaptées à différents supports</p>
                <p class="card-content text-base lg:text-lg lg:w-3/4 whitespace-normal break-words">Chez Kublai Vision, nous combinons créativité, technologie et stratégie pour offrir des résultats concrets et durables à nos clients.</p>

              </template>
            </template>
            
            <button
            v-if="sponsor.link"
            @click="openLink(sponsor.link)" 
            class="voir-button">Voir</button>
          </div>
        </div>        
        </div>
            
       </div>

       <!-- <Sponsors /> -->
    </main>

    <AppFooter />
   
    

</div>


</template>
<style scoped>

.icon-img {
  width: 28px;
}

.voir-button {
    background-color: var(--app-primary-color);
    padding: 4px 24px;
    border-radius: 15px;
    text-transform: uppercase;
    width: fit-content;
    color: white;
    margin-top: 1rem;
}

/* .form-container {
  background-color: #EDE6E6;
} */

/* .contact-input {
  border-color: red; 
  outline: none; 
  
} */


input[type="submit"] {
  display: inline-block;
  border: none;
  width: fit-content;
  cursor: pointer;
  color: white;
  background-color: var(--app-primary-color);
  padding: 4px 12px;
  border-radius: 15px;
  text-transform: uppercase;
  margin-top: 16px;
}

input {
  border-radius: 5px;
  width: 100%;
}

textarea {
  resize: none;
}



</style>