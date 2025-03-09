<script setup>
const emits = defineEmits(['teamSelected'])
function onSelectTeam(selection){
    emits('teamSelected', selection)
}
</script>
<template>
    <div class="teams-container flex px-[40px] h-[500px]">
        <div 
        class="flex w-1/3 bg-[#DB1717] p-2 cursor-pointer"
        @click="onSelectTeam('1')"
        >
            <p>1er</p>
        </div>
        <div 
        class="flex w-1/3 bg-[#2c1b18] text-white p-2 cursor-pointer"
        @click="onSelectTeam('2')"

        >
            <p>+30</p>
        </div>
        <div class="flex flex-col w-1/3 bg-[#ebeaea] p-2 gap-2">
            <p 
            class="cursor-pointer"
            @click="onSelectTeam('3')"
            >Deuxième</p>
            <p 
            class="cursor-pointer"
            @click="onSelectTeam('4')"
            >+40</p>
        </div>
    </div>
</template>
<style scoped></style>