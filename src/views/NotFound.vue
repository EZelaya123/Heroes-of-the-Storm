<template>
    <div class="about">

      <v-btn @click="goToHome">Ir a Home</v-btn>
      <h1>"NotFound"</h1>
     

    </div>
  </template>
  
  <script>
  export default {
    name: 'heroesView',
    
    methods: {
      goToHome() {
        this.$router.push('/');
      },
    }
  };
  </script>