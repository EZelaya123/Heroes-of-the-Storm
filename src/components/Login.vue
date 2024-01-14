<template>
  <v-dialog v-model="showLoginModal">
    <div class="container">
      <div class="titulo">
        <h5>Para ver los detalles del heroe inicia sesion</h5>
      </div>
      <v-card id="login" width="400px" class="mx-auto mt-5">
        <div class="datos_form">
          <v-card-title primary-title>
            <h1 class="mx-auto">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" name="email" label="Email" prepend-icon="mdi-account-circle"></v-text-field>
              <v-text-field v-model="password" @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'" label="Password" prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="login" color="purple">Login</v-btn>
          </v-card-actions>
        </div>
      </v-card>
      <div>
        <v-btn class="cerrar" @click="cerrarModal" outlined color="black"> Cerrar</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "LoginComp",
  data() {
    return {
      showLoginModal: true,
      showPassword: false,
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const auth = getAuth();

      try {

        // Autenticación del usuario
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;




        // Actualizar el estado con la información del usuario y del héroe
        this.$store.commit('setCurrentUser', user);


        // Navegar a la vista DetallesView
        if (this.$route.path !== '/detalles') {
          this.$router.push('/detalles');
        }
      } catch (error) {
        console.error('Error de autenticación:', error.message);
        alert('Usuario incorrecto');
      }
    },
    abrirModal() {
    this.showLoginModal = true;
  },
  cerrarModal() {
    this.showLoginModal = false;
    this.$emit('cerrar-login'); // Emitir evento
  },
  },
  mounted() {
  if (this.showLoginModal) {
    this.abrirModal();
  }
},
watch: {
  showModal(newVal) {
    if (newVal) {
      this.abrirModal();
    }
  }
},
};
</script>

<style scoped>
.container {
  z-index: 1000; 
  width: 600px;
  height: 500px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 60px;
}

.titulo {
  border: 1px black solid;
  background-color: rgb(11, 11, 105);
  height: 60px;
  width: 601px;
  display: flex;
  align-items: center;
  margin-left: -13px;
  margin-top: -13px;
  color: white;
}

h5 {
  margin-left: 15px;
}

#login {
  position: absolute;
  top: 35%;
  left: 37.5%;

}

.cerrar {
  margin-top: 395px;
  margin-left: 85%;
  border: white;
}
</style>
