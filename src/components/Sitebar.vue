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
                
                <v-list-item  title="ESMAD" 
                              subtitle="Professor de Design"
                              
                >João Rocha</v-list-item>
            <v-list-item prepend-icon="mdi-folder" title="PROJETOS" value="projetos" @click="$router.push({ name: 'projetos' })"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="PERFIL" value="prefil" @click="$router.push({ name: 'perfil' })"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-month" title="CALENDARIO" value="calendario" @click="$router.push({ name: 'home' })"></v-list-item>

          </v-list>
        </v-navigation-drawer>

        <v-app-bar  theme="dark"  hide-on-scroll  absolute>
          <v-spacer></v-spacer>
          <v-btn variant="text" icon="mdi-bell"></v-btn>

          <v-btn variant="text" icon="mdi-close"></v-btn> 
        </v-app-bar>
        
        
      
</template>

  <script>
    export default {
      //
      data() {
        return {
          logo: require('../assets/Group23.jpg'),
          icon: require('../assets/icon.png'),
          
        }
      },
    }
  </script>