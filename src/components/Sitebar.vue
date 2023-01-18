<template>
    
        <v-navigation-drawer
            permanent
            theme="dark"
            expand-on-hover
            
        >
          <v-list >
              <v-list-item                
              :prepend-avatar="logo" @click="$router.push({ name: 'home' })">              
              </v-list-item>
          </v-list>  
          <v-divider></v-divider>  
          <v-list density="compact" nav>

                <v-list-item  
                :prepend-avatar="icon"
                
                ></v-list-item>
                
                <v-list-item >{{ userlogado.nome }} {{ userlogado.apelido }}</v-list-item>
                <v-list-item >{{ userlogado.localizacao }}</v-list-item>
            <v-list-item prepend-icon="mdi-folder" title="PROJETOS" value="projetos" @click="$router.push({ name: 'projetos' })"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="PERFIL" value="prefil" @click="this.$router.push({ name: 'perfil' })"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-month" title="CALENDARIO" value="calendario" @click="$router.push({ name: 'home' })"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar  theme="dark"  hide-on-scroll  absolute>
          <v-spacer></v-spacer>
          <v-btn variant="text" icon="mdi-bell"  @click="$router.push({ name: 'login' })"></v-btn>

          <v-btn variant="text" icon="mdi-close"></v-btn> 
        </v-app-bar>
        
        
      
</template>

  <script>
  import { useUsersotre } from '../store/utilizador.js'

    export default {
      //
      data() {
        return {
          logo: require('../assets/Group23.jpg'),
          icon: require('../assets/icon.png'),
          utilizadors: useUsersotre(),
    
          userlogado:JSON.parse(localStorage.getItem('userlogado'))
 
        }
      },  
}
  </script>