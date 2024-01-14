<template>
  <v-app>
    <v-main>
      <div class="nav">
        <v-app-bar color="blue darken-4" dark>
          <v-container>
            <v-row class="icon">
              <v-btn @click="goToHome" text to="/"> <v-icon class="mr-1">mdi-home</v-icon>Home</v-btn>
            </v-row>
          </v-container>
        </v-app-bar>
      </div>
      <v-container fluid>
        <div class="title">
          <span>Héroes</span>
        </div>
       
        <v-img class="img" src="../assets/fondo_2.png"></v-img>
        <div>
          <div class="simbolos">
            <v-icon style="color: grey;">mdi-sword</v-icon>&nbsp;
            <v-icon style="color: grey;">mdi mdi-crosshairs-gps</v-icon>&nbsp;
            <v-icon style="color: grey;">mdi mdi-cross</v-icon>&nbsp;
            <v-icon style="color: grey;">mdi mdi-shield-half-full</v-icon>&nbsp;
            <v-icon style="color: grey;">mdi mdi-arch</v-icon>&nbsp;
            <v-icon style="color: grey;">mdi mdi-hand-back-right</v-icon>
          </div>
          <div class="table-container">
    <v-data-table :headers="headers" :items="heroes" fixed-header height="330" hide-default-header
      style="background-color: rgb(43, 42, 42); color: white; ">
      <template v-slot:header="{ props }">
        <thead>
          <tr>
            <th
              v-for="(header, index) in props.headers"
              :key="index"
              :class="{'grey--dark': index === 0, 'text-center': true}"
              :style="{ 'background-color': 'rgb(32, 30, 30)', 'color': 'white' }"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-avatar size="70">
              <img :src="item.imagen" alt="Hero Image" />
            </v-avatar>
            <div>{{ item.name }}</div>
          </td>
          <td>
            <v-btn style="color: white; background-color: blue;" @click="verDetalles(item)" text>Ver Detalles</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
        </div>
      </v-container>
    </v-main>
    <footerComp></footerComp>
    <Login class="logue" v-if="showLoginModal" @cerrar-login="handleCerrarLogin" />
  </v-app>
</template>
  
<script>

import 'firebase/compat/auth';
import footerComp from '../components/Footer.vue';
import axios from 'axios';
import 'firebase/compat/database';
import Login from '../components/Login.vue';



export default {
  name: 'heroesView',
  components: {
    footerComp,
    Login,
  },
  data() {
    return {

      headers: [
        { text: 'Héroes', value: 'heroes' },
        { text: 'Detalles', value: 'detalles' },
      ],
      heroes: [],
      showLoginModal: false,
      activeHeroId: null,
    }
  },
  computed: {
    currentUser() {
      // Lógica para obtener el usuario actual
      return this.$store.state.currentUser;
    },
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    // Función para cargar datos de la base de datos
    loadDataFromDatabase() {
      
      axios.get('https://heroes-of-the-storm-vue-default-rtdb.firebaseio.com/heroes.json')
        .then(response => {
          // Convertir el objeto a un array
          this.heroes = Object.keys(response.data).map(key => ({ id: key, ...response.data[key] }));
        })
        .catch(error => {
          console.error('Error al cargar datos:', error);
        });
    },
    verDetalles(heroe) {
  // Asigna el héroe seleccionado antes de verificar la sesión
  this.$store.commit('setSelectedHero', heroe);

  if (!this.currentUser) {
    // Si no hay sesión, muestra el formulario de inicio de sesión
    this.showLoginModal = true;
  } else {
    // Navega a la página de detalles
    this.$router.push('/detalles');
  }
},
  
    handleDetallesNavigation(item) {
      console.log('Elemento seleccionado:', item);
      this.$store.commit('setSelectedHero', item);
      this.$router.push('/detalles');
    },
    handleCerrarLogin() {
      this.showLoginModal = false;
    },
    selectHero(hero) {
      // Llama a la acción para seleccionar el héroe en Vuex
      this.$store.dispatch('selectHero', hero);
      // Otro código...
    },
   
  },


  mounted() {
    // Llama a la función para cargar los datos cuando el componente se monta
    this.loadDataFromDatabase();
    console.log('Login component mounted');
    this.$nextTick(() => {
      this.loadDataFromDatabase();
    });
  },


};
</script>
  
<style scoped>
#bienvenido {
  position: absolute;
  top: 30%;
  margin-left: 3%;
  font-size: 25px;
  z-index: 1;
}

span {
  color: white;

  position: absolute;
  top: 15%;
  margin-left: 20%;
  font-size: 25px;
  z-index: 1;
}

.icon {
  margin-left: 45%;
}

.nav {
  margin-top: 1px;
  height: 80px;
  width: 98.5%;
  margin-left: 12px;

}

::v-deep .v-data-table tbody tr:hover {
  background-color: #706a6a !important;
}


.v-data-table-header th.v-data-table__divider {
    background-color: black !important;
    color: black !important;
  }

.img {
  filter: blur(3px);
  width: 98.5%;
  height: 601.2px;
  margin-top: -27.7px;
  position: absolute;
}

.simbolos {
  position: absolute;
  top: 21%;
  margin-left: 20%;
}

.table-container {
  width: 60%;
  overflow-y: auto;
  position: absolute;
  top: 27%;
  margin-left: 20%;
}


th,
td {
  border: 1px solid rgb(68, 66, 66);
  padding: 8px;
  text-align: center;
}

.logue {
  position: absolute;
  top: 80%;
  left: 37.5%;
  z-index: 1;
  display: block !important;
  /* Utiliza !important solo si es necesario */
  visibility: visible !important;
  /* Utiliza !important solo si es necesario */

}
</style>