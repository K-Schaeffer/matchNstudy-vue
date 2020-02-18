<template>
  <div>
    <v-select
    :items ="listaUsuarios"
    item-text ="nome"
    item-value ="codigo"
    label ="Usuarios"
    v-model="perfil"
    @change="pegar(item.codigo)"
    outlined>
    </v-select>
    <v-card flat tile color="indigo darken-1" dark class="pa-5 text-center">
      <v-container>
        <v-avatar size="120px" color="amber darken-2">
          <img :src="perfil.img" v-if="perfil.img" />
          <!-- : signfica que está recebendo a variável-->
        </v-avatar>
        <h3>{{ perfil.nome }}</h3>
        <p>{{ perfil.descricao }}</p>
        <v-chip>{{ perfil.idade }}</v-chip>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Perfil",
  data: () => ({
    perfil: {},
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
    }
    },
    mounted() {
      this.pegar(2);
      this.listar();
    }
};
</script>

<style></style>
