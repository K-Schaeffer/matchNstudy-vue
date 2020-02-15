<template>
  <!--<v-app> "Container" só que pra APP-->
  <v-container>
    <div>
      <v-row>
        <v-col>
          <v-text-field label="Nome do Produto" v-model="produto.nome"></v-text-field>
        </v-col>
        <!--Model para adicionar nome ao Produto -->
        <v-col>
          <v-text-field label="Valor do Produto" v-model="produto.valor"></v-text-field>
        </v-col>
        <v-col>
          <v-icon @click="addLista">mdi-plus</v-icon>
        </v-col>
      </v-row>
    </div>
    <div v-for="item in lista" :key="item.nome">
      <!-- Para cada item na lista (com a key nome do item) -->
      {{item.nome}} custa {{item.valor}}
      <!-- dois colchetes é uma variável compilada -->
    </div>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
//Script mandatório
export default {
  name: "Principal", //Dando o nome do componente como Principal para quando for exportado
  data: () => ({
    //Declaração de variáveis do componente
    ligouAlerta: false, //Variavel ligou alerta
    lista: [{ nome: "Farofa", valor: "3,50", codigo: 1 }],
    produto: {} //Produto é um objeto (colchetes)
  }),
  methods: {
    //Metodos dos componentes
    addLista() {
      //this.lista.push({nome:"Batata", valor:"R$ 5,00"}) push é para adicionar na lista, o this é samesame adicionando valores
      this.lista.push(this.produto);
      this.produto = {};
    }
  }
};
</script>

<style>
</style>