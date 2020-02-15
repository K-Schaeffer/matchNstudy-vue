<template>
  <v-container>
    <div>
      <br />
      <v-text-field
        outlined
        label="Nome"
        placeholder="Nome"
        v-model="perfil.nome"
      >
        <!-- v-model relaciona texto com a variavel -->
      </v-text-field>
      <v-text-field
        outlined
        label="Idade"
        placeholder="Idade"
        type="number"
        v-model="perfil.idade"
      >
      </v-text-field>
      <v-textarea
        outlined
        label="Sobre mim"
        placeholder="Conte um pouco sobre você"
        v-model="perfil.desc"
      >
      </v-textarea>
      <v-text-field
        outlined
        label="Imagem"
        placeholder="Link"
        v-model="perfil.img"
      >
      </v-text-field>
      <v-row>
        <v-col>
          <v-btn depressed color="success" block>Exp</v-btn>
        </v-col>
        <v-col>
          <v-btn depressed color="primary" block @click="skillDialog = true"
            >Skills</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn depressed color="secondary" block>Salvar</v-btn>
        </v-col>
      </v-row>
    </div>

    <v-dialog v-model="skillDialog">
      <!-- Relacionando com a variávels -->
      <v-card>
        <v-card-title color="red darken-3" dark>
          Adicione Skills
        </v-card-title>
        <v-container>
          <v-form>
            <v-text-field
              outlined
              label="Skill"
              color="red darken-3"
              v-model="skill.name"
            ></v-text-field>
            <v-slider
              min="0"
              max="100"
              outlined
              color="red darken-3"
              v-model="skill.points"
            ></v-slider>
            <v-btn depressed color="red darken-3" dark block @click="addSkill()"
              >Add</v-btn
            >
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <!--Para cada item na lista me mostre o item e o i -->
    <v-badge
      v-for="(item, i) in listaSkills"
      :key="i"
      color="error"
      overlap
      :content="item.points"
    >
      <v-chip color="primary">
        {{ item.name }}
      </v-chip>
    </v-badge>
  </v-container>
</template>

<script>
export default {
  name: "ConfiguracaoPerfil",
  data: () => ({
    //Variaveis globais
    perfil: {},
    skill: {},
    listaSkills: [],
    skillDialog: false
  }),
  methods: {
    addSkill() {
      this.listaSkills.push(this.skill);
      this.skill = {};
      this.skillDialog = false;
    }
  }
};
</script>

<style></style>
