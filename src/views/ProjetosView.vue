<template >

    <v-container class="py-8 px-10"
     >
      <v-row>
        <v-col cols="12"   >
          <h1>Gestão de Projeto Eco-Escolas ESMAD </h1>
          <v-btn 
              class="mr-16"
              width="215"
              color="black"
              @click="$router.push({ name: 'projetos' })"
            >
            Gestão de Projeto
          </v-btn>
          <v-btn 
              class="mr-16"
              width="215"
              @click="$router.push({ name: 'table' })"
            >
              Plano de atividade
          </v-btn>
          <v-btn 
              class="mr-16"
              width="215"
              @click="$router.push({ name: 'dashboard' })"
            >
            Dashboard 
          </v-btn>
          <v-btn 
              class="mr-16"
              width="215"
              @click="$router.push({ name: 'relatorio' })"
            >
              Relatório 
          </v-btn>
        </v-col>
<!-- primeiro col -->
        <v-col cols="8">
          <v-card height="1000">  
            
          </v-card>
        </v-col>
<!-- segundo col -->
        <v-col cols="4">
          <v-card height="300">

          </v-card>

          <v-card height="300" style="margin:16px 0">

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {


}
</script>