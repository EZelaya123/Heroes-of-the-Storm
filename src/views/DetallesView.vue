<template>
  <v-app>
    <v-main>
      <div class="nav">
        <v-app-bar color="blue darken-4" dark>
          <v-container>
            <v-row class="icon">
              <v-btn @click="logout" text> <v-icon class="mr-1">mdi-logout</v-icon>Salir</v-btn>
            </v-row>
          </v-container>
        </v-app-bar>
      </div>
      <v-container class="detalles" fluid>
        <div>
          <h1 class="titulo">Bienvenido {{ currentUserEmail }}</h1>
          <h2 class="subtitulo">Aqui puedes ver el detalle del heroe</h2>
          <div class="datos">
            <div>
              <h4 class="nombre">{{ selectedHero.name }}</h4>
            </div>
            <div class="img" v-if="selectedHero">
              <img class="img" :src="selectedHero ? selectedHero.imagen : ''" alt="heroe">
            </div>

            <div class="datos_icon" v-if="selectedHero">
              <v-icon style="color: rgb(68, 0, 128); margin-left: 4%;">mdi-sword-cross</v-icon>&nbsp;
              <div>
                <span style="margin-left: 30%;">{{ selectedHero.ataque }}</span>
                <h3 style="margin-left: 30%;">Ataque</h3>
              </div>
            </div>
            <hr style="width: 82%; margin-left: 18%;">
            <div class="datos_icon" v-if="selectedHero">
              <v-icon style="color: rgb(68, 0, 128); margin-left: 4%;">mdi-decagram</v-icon>&nbsp;
              <div>
                <span style="margin-left: 12%;">{{ selectedHero.titulo }}</span>
                <h3 style="margin-left: 12%;">Titulo</h3>
              </div>
            </div>
            <hr style="width: 82%; margin-left: 18%;">
            <div class="datos_icon" v-if="selectedHero">
              <v-icon style="color:  rgb(68, 0, 128); margin-left: 4%;">mdi-tools</v-icon>&nbsp;
              <div>
                <span style="margin-left: 30%;">{{ selectedHero.funcion }}</span>
                <h3 style="margin-left: 30%;">Funcion</h3>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import axios from 'axios';

export default {
  name: "DetallesView",
  data() {
    return {
      headers: [
        { text: 'Héroes', value: 'heroes' },
        { text: 'Detalles', value: 'detalles' },
      ],
      showLoginForm: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    currentUserEmail() {
      return this.currentUser ? this.currentUser.email : '';
    },
    selectedHero: {
      get() {
        return this.$store.state.selectedHero;
      },
      set(hero) {
        this.$store.commit('setSelectedHero', hero);
      }
    },

  },
  methods: {
    loadDataFromDatabase() {
      const selectedHero = this.$store.state.selectedHero;
      console.log('Selected Hero:', selectedHero);

      if (selectedHero) {
        const apiUrl = `https://heroes-of-the-storm-vue-default-rtdb.firebaseio.com/heroes/${selectedHero.id}.json`;

        axios.get(apiUrl)
          .then(response => {
            // Actualiza selectedHero directamente
            this.$store.commit('setSelectedHero', response.data);
          })
          .catch(error => {
            console.error('Error al cargar datos:', error);
          });
      }
    },
    async logout() {
      try {
        // Llama a la acción de logout en tu store (asumiendo que tienes una)
        await this.$store.dispatch('logoutAction');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
      this.$router.go(-1);
    },
    beforeRouteLeave(to, from, next) {
      // Limpiar la selección del héroe al salir de /detalles
      this.$store.commit('setSelectedHero', null);
      this.$store.commit('setShowLoginForm', true);
      next();
    },
  },
  mounted() {
    // Llama a la función para cargar datos solo cuando no hay un héroe seleccionado
    if (!this.selectedHero) {
      this.loadDataFromDatabase();
    }
  },
};
</script>

<style scoped>
.detalles {
  background-color: rgb(77, 7, 99);
  height: 683px;
}

.icon {
  margin-left: 45%;
  color: yellow;
}

.titulo {
  margin-left: 18%;
  color: yellow;
  margin-top: 20px;
}

.subtitulo {
  margin-left: 37.5%;
  color: yellow;
  margin-top: 25px;
  margin-bottom: 15px;
}

.nombre {
  color: white;
  font-size: 30px;
  margin-left: 3%;
  top: 45%;
  position: absolute;
}

.datos {
  width: 25%;
  height: 518px;
  margin: auto;
  margin-top: 20px;
  color: rgb(195, 184, 184);
  background-color: white;
}

.img {

  width: 100%;
  height: 300px;
}

.datos_icon {
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
}

span {
  color: rgb(133, 124, 124);
  font: bold 120%;
  white-space: nowrap;
}
</style>