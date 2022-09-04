<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
       <!-- <Home></Home> -->
       <router-view></router-view>
  </div>
</template>

<script>

// import Home from '../view/Home'

export default {
  name: 'App',
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
#app {
 height: 100vh;
}
</style>
