<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
* {
  margin:0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
body,html {
  height:100%;
  overflow-y: hidden;
}
</style>
