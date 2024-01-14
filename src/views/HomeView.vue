<template>
  <v-app>
    <v-main>
      <navBarComp></navBarComp>
      <v-container fluid>   
          <v-img class="img" src="../assets/fondo_1.png"></v-img>      
          <div>      
        <v-card id="title">
          <h1 class="font-weight-bold ">
            Desafia las expectativas de los MOBA
          </h1>
          <p id="subtitle" class="subheading font-weight-regular">
            Epicos heroes y accion sin cesar en multiples campos de batalla
          </p>
          <br><br>
          <router-link to="/heroes">
          <v-btn class="btn" target="_blank" color="orange darken-3">
            <span class="mr-2">VER HEROES</span>
          </v-btn>
        </router-link>
        </v-card>
         
        <v-card class="text" color="purple darken-1">
          <v-card-text id="texto">
            ¡Te damos la
            bienvenida al Nexo!¡En este reino entre reinos, todo es posible! Elige entre decenas
            de
            heroes legendarios de todo el panteon de Blizzard,
            personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de
            batalla que redefinen el genero. ¡Esto no es un MOBA promedio,
            esto es Horoes of the Storm!
          </v-card-text>
        </v-card>      
      </div>     
      </v-container>
    </v-main>  
    <footerComp></footerComp>
  </v-app>
</template>

<script>

import navBarComp from '../components/NavBar.vue'
import footerComp from '../components/Footer.vue'


export default {
  name: 'App',
  components: {
    navBarComp,
    footerComp,
  },

}
</script>

<style scoped>

.img{
  filter: brightness(0.2);
  width: 100%;
  height: 601.2px;
  margin-top: -27.7px;
}

#title {
  border: 1px white solid;
  position: absolute;
  top: 25%;
  background-color: transparent;
  color: white;
  width: 650px;
  height: 180px;
  margin-left: 32%;
  padding: 17px;
}
#subtitle{
  margin-top: 10px;
}

.text {
  position: absolute;
  top: 65%;
  height: 100px;
  width: 98.5%;
  filter: brightness(0.5);
}

span{
  color: white;
}

#texto{
color: white;
font-size: 20px;
text-align: start;
}

.btn{
  margin-top: -70px;
  margin-left: 40%;
}
</style>