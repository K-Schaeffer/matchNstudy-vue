import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home"
import Perfil from "../components/Perfil"
import Principal from "../components/Principal"
import ConfiguracaoPerfil from "../components/ConfiguracaoPerfil"
import ListaUsuarios from "../components/ListaUsuarios"
import Chat from "../components/Chat"

Vue.use(Router)

export default new Router({
    routes: [
        {path: "/",
        name: "Home", 
        component: Home,
        icone: "mdi-home"},
       
        {path: "/perfil",
        name: "Perfil", 
        component: Perfil,
        icone: "mdi-account"},

        {path: "/principal",
        name: "Principal",
        component: Principal,
        icone: "mdi-store"}, // Sem aspas pois está referenciando o próprio componente
        
        {path: "/configuracaoperfil",
        name: "Configuração",
        component: ConfiguracaoPerfil,
        icone: "mdi-settings"},
    
        {path: "/listausuarios",
        name: "Lista de Usuários",
        component: ListaUsuarios,
        icone: "mdi-account-details"}, 
    
        {path: "/chat",
        name: "Chat",
        component: Chat,
        icone: "mdi-chat"}
    ]
})