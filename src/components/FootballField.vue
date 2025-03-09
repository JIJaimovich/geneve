<template>
    <div class="field">
      <div class="center-circle"></div>
      <div class="half-line"></div>
      <div class="goal goal-top"></div>
      <div class="goal goal-bottom"></div>
      <div class="penalty-box penalty-box-top"></div>
      <div class="penalty-box penalty-box-bottom"></div>
    </div>
  </template>
  
  <style scoped>
  .field {
    width: 240px;
    height: 300px;
    background-color: oklch(0.938 0.127 124.321);
    position: relative;
    border: 5px solid white;
  }
  
  .center-circle {
    width: 80px;
    height: 80px;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .half-line {
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
  .goal {
    width: 80px;
    height: 10px;
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .goal-top {
    top: -5px;
  }
  
  .goal-bottom {
    bottom: -5px;
  }
  
  .penalty-box {
    width: 140px;
    height: 60px;
    border: 2px solid white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .penalty-box-top {
    top: 0;
  }
  
  .penalty-box-bottom {
    bottom: 0;
  }
  </style>
  