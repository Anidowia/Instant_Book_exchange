<template>
  <div class = "navbar">  
    <img class = "logo" alt="Bookz logo" src="@/assets/logo.png">
    <h class = "signboard"> Bookz </h>
    <h class = "undertext"> Book xchange website</h>
  </div>
<router-view />
</template>

<script>
export default {
  name: 'App',
  // components: {
  // }
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
