<template>
  <div class="">
    <v-footer class="foot" padless color="blue darken-4" dark>
        <v-col class="text-center" cols="12">
            <strong>Bienvenido a vuetify</strong>            
            {{ new Date().getFullYear() }} —
        </v-col>
    </v-footer>
  </div>
</template>

<script>


  export default {
    name: 'footerComp',

   
  }
</script>

<style scoped>

.foot{
margin-top: -56px;
  height: 80px;
  width: 98.5%;
  margin-left: 12px;
  

}

</style>