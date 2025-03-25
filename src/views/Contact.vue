<script setup>
import AppBanner from "../components/AppBanner.vue"

import AppFooter from "../components/AppFooter.vue"

import Sponsors from "../components/Sponsors.vue"

</script>

<template>
<div class="page-container bg-[#EDE6E6] shadow-md">
    
    <main>       
       <AppBanner /> 
       <div class="contact-container flex flex-col lg:flex-row w-full px-2 py-4 xl:p-[40px] gap-[50px]">
          <div class="form-container flex w-full lg:max-w-[700px]">
              <form action="#" method="get" class="flex flex-col w-full gap-4">
                    
                      <div class="col flex flex-col gap-1">
                          <label for="name" class="text-md font-medium">Nom</label>
                          <input class="p-2 border border-gray-400 focus:border-[#DB1717] outline-none" type="text" name="name" id="name" required >  
                      </div>
                      <div class="col flex flex-col gap-1">
                          <label for="email" class="text-md font-medium">Email</label>
                          <input class="p-2 border border-gray-400 focus:border-[#DB1717] outline-none" type="email" name="email" id="email" required >  
                      </div> 
                    
                    
                      <div class="col flex flex-col gap-1">
                        <label for="msg" class="text-md font-medium">Sujet</label>
                        <input class="p-2 border border-gray-400 focus:border-[#DB1717] outline-none" type="text" name="msg" id="msg" required >       
                      </div> 
                   
              
                      <div class="col flex flex-col gap-1">
                        <label for="msg" class="text-md font-medium">Message</label>
                        <textarea name="" id=""  rows="5" class="p-2 border border-gray-400 focus:border-[#DB1717] outline-none" ></textarea> 
                      </div> 
                    
                    
                      <input type="submit" value="Envoyer" class="text-base">
                    
                </form>
              
            </div>

            

          <div class="map-container flex w-full rounded-md">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.0445167558987!2d6.0917842!3d46.1896728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7ca7c08bc789%3A0x6f3433168c36383f!2sintercommunal%20center%20of%20sports%2C%20leisure%20and%20nature%20of%20Evaux!5e0!3m2!1sen!2sar!4v1741966614505!5m2!1sen!2sar"
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            sandbox="allow-scripts allow-same-origin"
            referrerpolicy="no-referrer-when-downgrade"
            allow="geolocation"
            class="rounded-md"
            ></iframe>
            
          </div>
       </div>
       <Sponsors />
      </main>

    <AppFooter />
   
    

</div>


</template>
<style scoped>

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