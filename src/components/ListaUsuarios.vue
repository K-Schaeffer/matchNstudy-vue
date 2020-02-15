<template>
  <v-data-table
    :headers="cabecalho"
    :items="usuarios"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
//import ConfiguracaoPerfil from "../components/ConfiguracaoPerfil"
export default {
  name: "ListaUsuarios",
  data: () => ({
    cabecalho: [
      { text: "Nome", value: "nome" },
      { text: "Idade", value: "idade" },
      { text: "Habilidades", value: "habilidades" },
      { text: "Imagem", value: "imagem" }
    ],
    usuarios: [
      {
        nome: "Teste",//ConfiguracaoPerfil.perfil.nome,
        idade: 10,
        habilidades: "Teste",
        imagem: "Link"
      },
      {
        nome: "Frozen Yogurt",
        idade: 10,
        habilidades: "Skills",
        imagem: "Link"
      },
      {
        nome: "Frozen Yogurt",
        idade: 10,
        habilidades: "Skills",
        imagem: "Link"
      }
    ]
  })
};
</script>

<style></style>