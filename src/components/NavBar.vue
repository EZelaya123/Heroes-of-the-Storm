<template>
    <div class="nav" >
        <v-app-bar color="blue darken-4" dark>
            <v-container>
                <v-row class="icon">
                    <v-btn text to="/"> <v-icon class="mr-1">mdi-home</v-icon>Home</v-btn>

                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>

<style scoped>
.icon {
    margin-left: 45%;
}

.nav {
    margin-top: 1px;
    height: 80px;
    width: 98.5%;
  margin-left: 12px; 

}
</style>