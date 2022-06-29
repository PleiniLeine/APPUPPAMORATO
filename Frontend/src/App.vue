<template>
  <v-app>
    <Navbar />
    <div id="app" class="container is-max-desktop">
    
    <router-view />
  </div>
  </v-app>
</template>
 
<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",

  components: {
    Navbar
  }
};

</script>
 
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>