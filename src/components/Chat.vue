<template>
  <v-container>
    <v-text-field
      label="Mensagem"
      placeholder="Digite a sua mensagem"
      v-model="mes.mensagem"
    >
    </v-text-field>

    <v-btn color="success" @click="salvar()"> Enviar </v-btn>

    <v-timeline>
      <v-timeline-item
        v-for="msg in chat"
        :key="msg.codigo"
        icon="mdi-message-reply"
        icon-color="green"
        color="black"
      >
        <template v-slot:icon> </template>
        <span slot="opposite">{{ msg.data }}</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ msg.usuario }}</v-card-title>
          <v-card-text>
            {{ msg.mensagem }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Chat",
  data: () => ({
    chat: [],
    mes: {}
  }),
  methods: {
    chatats() {
      let url = "http://api.anticasper.com/index.php?acao=chat";
      axios
        .get(url)
        .then(res => {
          this.chat = res.data;
        })
        .catch(err => alert(err));
    },
    salvar() {
      this.mes.usuario = "Kauan";
      this.mes.data = new Date().toLocaleTimeString("pt-BR");
      let url = "http://api.anticasper.com/index.php?acao=mandarmensagem";
      axios
        .post(url, this.mes)
        .then(res => {
          console.log(res);
          this.mes = {};
          this.chat = this.chatats();
        })
        .catch(err => alert(err));
    }
  },
  mounted() {
    setInterval(() => {
      this.chatats();
    }, 1000);
  }
};
</script>

<style></style>
