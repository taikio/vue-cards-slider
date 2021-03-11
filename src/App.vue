<template>
  <div id="app">
    <img src="./assets/logo.png">    
    <card-slider />
  </div>
</template>

<script>
import CardSlider from './components/card-slider'

export default {
  components: {
    CardSlider
  }
}
</script>

<style>
body {
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
