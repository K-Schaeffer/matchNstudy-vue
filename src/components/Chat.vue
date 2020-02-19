<template>
  <v-container>
    <v-textarea
      label="Mensagem"
      placeholder="Digite a sua mensagem"
      v-model="chat"
    >
    </v-textarea>

    <v-btn color="success" @click="enviar()"> Enviar </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Chat",
  data: () => ({
    perfil: "Kauan",
    chat: {
      mensagem: "Oi",
      usuario: "Kauan",
      data: "20/20/20",
      //data = new Date().toLocaleTimeString("pt-br")
    }
  }),
  methods: {
    enviar() {
      let url = "http://api.anticasper.com/index.php?acao=mandarmensagem";
      axios
        .post(url, this.chat)
        .then(res => {
          this.sucesso = res;
          console.log(this.sucesso);
        })
        .catch(err => alert(err));
    },
    listar() {
      let url = "http://api.anticasper.com/index.php?acao=chat";
      axios
        .get(url)
        .then(res => {
          //Then se dar certo
          this.listaUsuarios = res.data;
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style></style>
