<template>
  <div>
    <v-text-field 
    v-model="search"
    label="Buscar"> </v-text-field>
    <v-data-table
      :headers="cabecalho"
      :items="usuarios"
      :items-per-page="5"
      :search="search"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListaUsuarios",
  data: () => ({
    search: "",
    cabecalho: [
      { text: "Nome", value: "nome" },
      { text: "Idade", value: "idade" },
      { text: "Descrição", value: "descricao" }
    ],
    usuarios: []
  }),
  methods: {
    listar() {
      let url = "http://api.anticasper.com/index.php?acao=listar";
      axios
        .get(url)
        .then(res => {
          this.usuarios = res.data;
        })
        .catch(err => alert(err));
    }
  },
  mounted() {
    this.listar();
  }
};
</script>

<style></style>
