<template>
  <div class="text-center">
    <div cols="12" class="d-flex justify-center mb-6 carrossel">
        <v-carousel hide-delimiters cycle>
          <v-carousel-item  reverse-transition="fade-transition" transition="fade-transition">
            <img src="../assets/home/1.jpg" width="500">
          </v-carousel-item>
          <v-carousel-item  reverse-transition="fade-transition" transition="fade-transition">
            <img src="../assets/home/2.jpg" width="500">
          </v-carousel-item>
          <v-carousel-item  reverse-transition="fade-transition" transition="fade-transition">
            <img src="../assets/home/3.jpg" width="500">
          </v-carousel-item>
          <v-carousel-item  reverse-transition="fade-transition" transition="fade-transition">
            <img src="../assets/home/4.jpg" width="500">
          </v-carousel-item>
      </v-carousel>
    </div>
  </div>
  
    
</template>
 
<script>
// import axios
 
export default {
  name: "Home",
  data() {
    return {
    };
  },
};
</script>
 
<style>
.carrossel{
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>