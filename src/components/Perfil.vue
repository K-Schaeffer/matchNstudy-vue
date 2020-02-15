<template>
  <div> 
      <v-card flat tile color="indigo darken-1" dark
      class="pa-5 text-center">
        <v-container>
          <v-avatar size="120px" color="amber darken-2">
            <img :src="perfil.img" v-if="perfil.img"> <!-- : signfica que está recebendo a variável-->
          </v-avatar>
          <h3>{{perfil.nome}}</h3>
          <p>{{perfil.desc}}</p>
          <v-chip>{{perfil.idade}}</v-chip>
        </v-container>
      </v-card>
  </div>
</template>

<script>
export default {
    name:"Perfil",
    data: () => ({
      perfil: {}
    })
};
</script>

<style>

</style>