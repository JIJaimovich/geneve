<template>
   
        <footer>
                
            <div class="footer-container px-2 py-4 xl:p-[40px]">

                <div class="footer-section flex flex-col lg:flex-row w-full gap-8">
                    <div class="club-container flex w-full">
                        <img src="../assets/img/logo-geneve.png" alt="Geneve" class="logo-geneve" />
                    </div>
                    <div class="menu-container flex flex-col w-full gap-[2px]">
                        <p class="footer-title mb-4 text-base">Menu</p>
                        <RouterLink to="/" class="link text-base" active-class="active-class-link"> 
                        Home       
                        </RouterLink>
                        <RouterLink to="/equipes" class="link text-base" active-class="active-class-link"> 
                        Equipes       
                        </RouterLink>
                        <RouterLink to="/club" class="link text-base" active-class="active-class-link"> 
                        Le Club       
                        </RouterLink>
                        <RouterLink to="/sponsors" class="link text-base" active-class="active-class-link"> 
                        Sponsors       
                        </RouterLink>
                        <RouterLink to="/contact" class="link text-base" active-class="active-class-link"> 
                        Contact       
                        </RouterLink>
                        <!-- <RouterLink to="/contact" class="link text-base" > 
                        Soutenir       
                        </RouterLink> -->
                    </div>
                    <div class="address-container flex flex-col w-full">
                        <!-- 33 Avenue du Bois de la Chapelle 1213 Onex  -->
                        <p class="footer-title mb-4 text-base">Address</p>
                        <p class="text-base">33 Avenue du Bois</p>
                        <p class="text-base">de la Chapelle</p>
                        <p class="text-base">1213 Onex</p>
                    </div>
                    <div class="contact-container flex flex-col w-full">
                        <p class="footer-title mb-4 text-base">Contact</p>
                        <div class="flex gap-2">
                            <img src="../assets/contact.svg" alt="contact" class="contact-icon"/>
                            <img src="../assets/wap.svg" alt="whatsapp" class="contact-icon"/>
                            <img src="../assets/phone.svg" alt="phone" class="contact-icon"/>


                            
                        </div>
                    </div>
                    <div class="social-container flex flex-col w-full">
                        <p class="footer-title mb-4 text-base">Social Media</p>
                        <div class="flex gap-2">
                            <img src="../assets/facebook.svg" alt="facebook" class="social-icon"/>
                            <img src="../assets/instagram.svg" alt="instagram" fill="white" class="social-icon"/>
                            <img src="../assets/google.svg" alt="google" class="social-icon"/>
                        </div>
                    </div>
                </div>
              
                <div class="copy-right-section flex justify-center items-center">
                    <div class="kublai w-full xl:w-[80%]">
                        <p class="copy-right text-base">©2025 
                            <a 
                            class="bg-gradient-to-r from-[#17619E] via-[#00B0B5] to-[#F7981F] text-transparent bg-clip-text text-lg font-bold drop-shadow-lg"
                            href="https://kublai-vision.de/" 
                            target="_blank" 
                            rel="noopener noreferrer">Kublai Digital Services</a>. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
  
</template>
<style scoped>



.footer-container{    
    display: flex;
    flex-direction: column;
    /* padding: 40px 40px; */
    
    /* margin: 2rem auto 0; */
    width: 100%;
    gap: 4rem;
    color: var(--app-txt-inverted-base-color);
    
}

.kublai {
    border-top: 1px solid #494141;
    /* width: 80%; */
    display: flex;
    justify-content: center;
   align-items: center;
    padding-top: 2rem;
}

.footer-title {
    border-bottom: 1px solid #494141;
    padding-bottom: 8px;
}


.logo-geneve {
    height: auto;
    width: 120px;
}



@media (min-width: 800px) {
  .logo-geneve {
    width: 150px;
  }
}



.social-icon, .contact-icon {
    width: 26px;
    height: 26px;
    cursor: pointer;
}

</style>