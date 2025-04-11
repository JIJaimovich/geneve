<script setup>


const currentYear = new Date().getFullYear()

const titles = [
"Actualité", 
"Classement", 
"Statistiques", 
]

const contents = [
"Nouvelle communication entre arbitres et joueurs", 
"La bataille pour la première place continue", 
"Des chiffres impressionnants cette saison" 
]

const imgs = [
`${import.meta.env.BASE_URL}uefa4.jpg`,
`${import.meta.env.BASE_URL}uefa2.jpg`,
`${import.meta.env.BASE_URL}uefa3.jpg`,

]
const openLink = (sel) => {

if(sel === 'Actualité'){        
    window.open('https://www.uefa.com/uefachampionsleague/news/', '_blank');
}
else if(sel === 'Classement'){        
    window.open('https://www.uefa.com/uefachampionsleague/standings/', '_blank');
}
else {        
    window.open('https://www.uefa.com/uefachampionsleague/statistics/', '_blank');
}
};
</script>

<template>
    <div 
    class=" max-w-[1300px] w-full flex flex-col gap-20 px-2">
        <h2 class="text-center lg:text-start text-[#E02020] text-3xl">Les dernières news de la planète football pro</h2>
        <div class="posts-container flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-[1300px] mx-auto gap-32 lg:gap-0">
            <div 
            v-for="n in 3" 
            @click="openLink(titles[n-1])"
            class="post-container cursor-pointer">
                <img :src="imgs[n-1]" alt="uefa" class="post-img rounded-md"/>
                <div class="post-content-container rounded-md">
                    <p class="post-title text-sm leading-none text-center text-[#DB1717]">UEFA</p>
                    <p class="post-content text-center text-base leading-tight">{{ contents[n-1] }}</p>
                    <p class="post-description text-xs text-gray-600">{{ titles[n-1] }} <span>{{ currentYear }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.post-img {
  width: auto;
  max-width: 340px;
  height: auto;
  object-fit: contain;
  filter: brightness(80%);
}

.post-content-container {
    background-color: white;
    width: 300px;
    position: absolute;
    bottom: -50px;
    left: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
}

.post-content {
    max-width: 250px;
}

.post-container { 
    position: relative;
}


/* .posts-container { 
    background-color: red;
} */



</style>