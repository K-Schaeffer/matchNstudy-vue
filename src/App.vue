<!-- App vue é o componente principal. -->
<template>
  <v-app>
    <!-- App mandando no componente de nome Principal -->
    <v-navigation-drawer app clipped v-model="menuVisivel"> <!--Esse componente vai basear seu comportamento na var-->
      <v-list>
        <v-list-item v-for="item in menuLista" :key="item.path" 
        link @click="mudarRota(item.path)">
          <v-list-item-action>
            <v-icon>{{item.icone}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{item.name}}
          </v-list-item-content>

        </v-list-item>  
      </v-list>  
    </v-navigation-drawer> 
    <!-- Model tem comportamento de if mas é mais adequado para apps,
    pois vai sobrepor a tela na resolução pequena-->
    <v-app-bar color="purple darken-2" dark dense flat app clipped-left>
      <v-icon class="mr-5" @click="menuVisivel = !menuVisivel">mdi-menu</v-icon>
      <!-- Pra quando clicar inverter o estado, @ significa interatividade-->
      <v-spacer></v-spacer>
      <!-- Ocupar todo o espaço entre o componente de cima e de baixo -->
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>Developed at Senac</v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    menuVisivel: false,
    menuLista: [] // $ pra citar o Router do router.js e usar a lista dele
  }),
  methods:{
    mudarRota(rota){
      this.$router.push(rota)
    }
  },
  mounted(){ // Criando elementos que vão aparecer na tela... E aqui MONTANDO os elementos pra depois liberar para visualização
    this.menuLista = this.$router.options.routes //Chamando todas as rotas do arquivo router
  }
};
</script>
