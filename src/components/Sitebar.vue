<template>
    
        <v-navigation-drawer
            permanent
            theme="dark"
            expand-on-hover
            
        >
          <v-list >
              <v-list-item                
              :prepend-avatar="logo" @click="$router.push({ name: 'home' })" style="margin-left: 30%;">              
              </v-list-item>
          </v-list>  
          <v-divider></v-divider>  
          <v-list density="compact" nav>

                <v-list-item  
                :prepend-avatar="icon"
                style="margin-left: 35%;"
                ></v-list-item>
                
                <v-list-item v-if="isAuthenticated"
                style="margin-left: 20%;"
                >{{ userlogado.nome }} {{ userlogado.apelido }}</v-list-item>

                <v-list-item v-if="isAuthenticated"
                style="margin-left: 30%;"
                >{{ userlogado.localizacao }}</v-list-item>
            <v-list-item prepend-icon="mdi-folder" title="PROJETOS" value="projetos" @click="$router.push({ name: 'projetos' })"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="PERFIL" value="prefil" @click="this.$router.push({ name: 'perfil' })"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-month" title="CALENDARIO" value="calendario" @click="$router.push({ name: 'home' })"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar  theme="dark"  hide-on-scroll  absolute>
          <v-spacer></v-spacer>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-if="isAuthenticated"
                  color="teal accent-2"
                  v-bind="props"
                  variant="text" icon="mdi-bell"
                >
                 
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <v-card>
                    <v-card-title class="text-center" color="teal accent-2" >
                      Notificação
                    </v-card-title>

                    <v-card-text>
                      <h1>Tens um evento que termina em 3 dias.</h1>
                    </v-card-text>
                  </v-card>
                </v-card-text>

              </v-card>
            </v-dialog>
          </div>
          

          <v-btn variant="text" icon="mdi-close" color="teal accent-2" @click="logout"></v-btn> 
        </v-app-bar>
        
        
      
</template>

  <script>
  import { useUsersotre } from '../store/utilizador.js'

    export default {
      //
      data() {
        return {
          isAuthenticated:(localStorage.getItem('isAuthenticated')),
          logo: require('../assets/Group23.jpg'),
          icon: require('../assets/icon.png'),
          utilizadors: useUsersotre(),
            
          userlogado:JSON.parse(localStorage.getItem('userlogado')),
          dialog: false,

        }
      }, 
      methods:{
        logout(){
          localStorage.clear();
          alert('Você está offline, obrigado por usar!');
          location.reload()
          this.$router.push({ name: 'login' });
        }
      } 
}
  </script>