<template>
  <v-container>
    <v-select 
    :items ="listaUsuarios"
    item-text ="nome"
    item-value ="codigo"
    label ="Usuarios"
    v-model="perfil2" 
    @change="troca()"
    outlined>
    </v-select> <!-- V-model serve para manipular o componente -->
    <v-card flat tile color="indigo darken-1" dark class="pa-5 text-center">
      <v-container>
        <v-avatar size="120px" tile>
          <img :src="perfil.img" v-if="perfil.img" />
          <!-- : signfica que está recebendo a variável-->
        </v-avatar>
        <h3>{{ perfil.nome }}</h3>
        <p>{{ perfil.descricao }}</p>
        <v-chip>{{ perfil.idade }}</v-chip>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Perfil",
  data: () => ({
    perfil: {},
    perfil2: {},
    listaUsuarios: []
  }),
  methods: {
    pegar(codigo) {
      let url = "http://api.anticasper.com/index.php?acao=pegar";
      axios
        .post(url, { codigo })
        .then(res => {
          //Then se dar certo
          this.perfil = res.data;
        })
        .catch(err => alert(err));
    },
    listar() {
      let url = "http://api.anticasper.com/index.php?acao=listar";
      axios
        .get(url)
        .then(res => {
          //Then se dar certo
          this.listaUsuarios = res.data;
        })
        .catch(err => alert(err));
    },
    troca(){
      this.perfil = this.pegar(this.perfil2);
    }
    },
    mounted() {
      this.pegar(2);
      this.listar();
    }
};
</script>

<style></style>
