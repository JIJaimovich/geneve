<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppButtonIcon from './base/AppButtonIcon.vue';



import { useRoute } from 'vue-router';
import LogoAppHeader from './LogoAppHeader.vue';

const route = useRoute()


const props = defineProps({
    triggerPulse: {
    type: Boolean,
    default: false,
  },
})



// screen width
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

const appLg = 1024



onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});



const mobileNav = ref(false)

</script>

<template>
    <header>

        <nav class="px-[4px] xl:px-[40px]">
            <div class="container-left flex ">
                <div v-if=" screenWidth > appLg" class="logo-section flex gap-2 xl:gap-4">
                    <div class="link-container">
                        <RouterLink to="/" class="link" active-class="active-class-link"> 
                            <div class="flex items-center  sm:gap-1 flex-col sm:flex-row">
                                <span class="text-md xl:text-lg" >Home</span>
                                <img v-if="route.path === '/'" src="../assets/chevronAlt.svg" alt="chevron" class="chevron-icon"/>
                                <img v-else src="../assets/chevron.svg" alt="chevron" class="chevron-icon"/>   

                            </div>
                        </RouterLink>
                    </div>
                    <div class="link-container">
                        <RouterLink to="/equipes" class="link" active-class="active-class-link"> 
                            <div class="flex items-center  sm:gap-1 flex-col sm:flex-row">
                                <span class="text-md xl:text-lg" >Equipes </span>
                                <img v-if="route.path.includes('/equipes')" src="../assets/chevronAlt.svg" alt="chevron" class="chevron-icon"/>
                                <img v-else src="../assets/chevron.svg" alt="chevron" class="chevron-icon"/>  
                                 
                            </div>
                        </RouterLink>
                    </div>
                    <div class="link-container">
                        <RouterLink to="/club" class="link" active-class="active-class-link"> 
                            <div class="flex items-center  sm:gap-1 flex-col sm:flex-row">
                                <span class="text-md xl:text-lg">Le Club</span>
                                <img v-if="route.path === '/club'" src="../assets/chevronAlt.svg" alt="chevron" class="chevron-icon"/>
                                <img v-else src="../assets/chevron.svg" alt="chevron" class="chevron-icon"/>  
                            </div>
                        </RouterLink>
                    </div>
                    <div class="link-container">
                        <RouterLink to="/sponsors" class="link" active-class="active-class-link"> 
                            <div class="flex items-center  sm:gap-1 flex-col sm:flex-row">
                                <span class="text-md xl:text-lg">Sponsors</span>
                                <img v-if="route.path === '/sponsors'" src="../assets/chevronAlt.svg" alt="chevron" class="chevron-icon"/>
                                <img v-else src="../assets/chevron.svg" alt="chevron" class="chevron-icon"/>  
                            </div>
                        </RouterLink>
                    </div>
                    <!-- <div class="link-container">
                        <RouterLink to="/contact" class="link" active-class="active-class-link"> 
                            <div class="flex items-center  sm:gap-1 flex-col sm:flex-row">
                                <span class="text-md xl:text-lg">Contact</span>
                                <img v-if="route.path === '/contact'" src="../assets/chevronAlt.svg" alt="chevron" class="chevron-icon"/>
                                <img v-else src="../assets/chevron.svg" alt="chevron" class="chevron-icon"/>  
                            </div>
                        </RouterLink>
                    </div> -->
                    <!-- <p>Current route: {{ $route.path }}</p>     -->
                </div>
            </div>

            <!-- <div class="container-mid flex justify-center items-center gap-4" v-if=" screenWidth > appLg">
                <img src="../assets/facebook.svg" alt="facebook" class="social-icon"/>
                <img src="../assets/instagram.svg" alt="instagram" class="social-icon"/>
                <img src="../assets/google.svg" alt="google" class="social-icon"/>
            </div> -->
           
            <div class="container-right flex justify-end items-center gap-2 lg:gap-8 link-menu h-full">                
                    
                   
                <RouterLink to="/contact" 
                class="link"
                v-if=" screenWidth > appLg"                                     
                >
                <button class="donation-button text-md">Contact</button>
                   
                </RouterLink>
                        
                        
                <AppButtonIcon  
                @click="mobileNav = !mobileNav"
                v-if=" screenWidth < appLg">
                    
                    <template v-slot:img>
                        <img src="../assets/menuOutlined.svg" alt="Menu" class="cart-icon"/>   
                                                    
                    </template>                      
                    
                </AppButtonIcon>
                    

            </div>

            <Transition name="mobile-nav" >
                <ul 
                v-show="mobileNav" 
                class="dropdown-nav flex pl-4 pt-4 gap-2">

                    <li class="cursor-pointer text-xl"                     
                    @click="mobileNav=!mobileNav">
                        <RouterLink to="/"  active-class="active-class-link"
                        >Home</RouterLink>
                    </li>                  

                    <li class="cursor-pointer text-xl" @click="mobileNav=!mobileNav">
                        <RouterLink to="/equipes"                         
                        active-class="active-class-link"
                        >Equipes
                        </RouterLink>
                    </li>

                    <li class="cursor-pointer text-xl" @click="mobileNav=!mobileNav">
                        <RouterLink to="/club"                         
                        active-class="active-class-link"
                        >Le Club
                        </RouterLink>
                    </li>

                    <li class="cursor-pointer text-xl" @click="mobileNav=!mobileNav">
                        <RouterLink to="/sponsors"                         
                        active-class="active-class-link"
                        >Sponsors
                        </RouterLink>
                    </li>

                    <li class="cursor-pointer text-xl" @click="mobileNav=!mobileNav">
                        <RouterLink to="/contact"                         
                        active-class="active-class-link"
                        >Contact
                        </RouterLink>
                    </li>

                    <!-- <li class="cursor-pointer text-xl" @click="mobileNav=!mobileNav">
                        <RouterLink to="/contact"                        
                        >Soutenir
                        </RouterLink>
                    </li> -->
                    
                
                </ul>
            </Transition>

        </nav>




    </header>
</template>

<style scoped>



.donation-button {
    background-color: var(--app-primary-color);
    padding: 4px 12px;
    border-radius: 15px;
    text-transform: uppercase;
}

.chevron-icon {
    width: 16px;
    height: 16px;
}

.social-icon {
    width: 28px;
    height: 28px;
    cursor: pointer;
    pointer-events: auto;
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;  
  height: 100%;  
  /* max-width: 1800px; */
  /* sacar*/
  color: white;
  /* padding: 0 40px; */
}



.container-left, .container-right, .container-mid {
    width: 100%;
    
} 



.link-menu {
    color: var(--app-txt-link-color);
}







.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

}

li {
    margin-left: 0;   
    color: var(--app-txt-base-color);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;  
}
   
.mobile-nav-enter-from, 
.mobile-nav-leave-to {
    transform: translateX(-250px);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}




</style>