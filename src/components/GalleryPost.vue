
<template>
<!-- 403F3F -->

    <div class="gallery-container cursor-pointer">
        <img src="/gallerypost.jpg" alt="gallery" class=""/>
        <div class="gallery-button flex gap-2 items-center justify-center rounded-sm cursor-pointer bg-gray-100">
            <img src="../assets/images.svg" alt="images" class="images-icon"/>
            <span class="text-gray-600">Images</span>   
        </div>
    </div>

</template>

<style scoped>

.gallery-container {
    position: relative;
}

.gallery-button {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 60px);
    z-index: 999;
    
    width: 120px;
    height: 40px;
}

.images-icon {
    height: 20px;
    width: 20px;
}

</style>