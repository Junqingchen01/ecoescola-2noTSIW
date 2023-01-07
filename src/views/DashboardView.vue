<template >

    <v-container class="py-8 px-10"
     >
      <v-row>
        <v-col cols="12"   >
          <h1>Dashboard </h1>
          <v-btn 
              class="mr-16"
              width="215"
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
              color="black"
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
        <v-col
        cols="12">


          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {


}
</script>