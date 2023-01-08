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
<!-- primeiro col -->
        <v-col cols="4">
<!-- Overview card -->
            <v-card height="300" >
              <v-card-title class="text-center">
                                Overview
               </v-card-title>
                <v-spacer></v-spacer>
                <v-card-text>
                  <!-- <DoughnutChart /> -->
                </v-card-text>
                <v-card-text class="text-center text-h5">
                                60%
                </v-card-text>
            </v-card>
<!-- tema card -->
            <v-card height="150" class="my-card">
              <v-card-title class="text-center">
                                Tema
               </v-card-title>
                <v-spacer></v-spacer>
                <v-card-text class="text-center text-h5 ">
                               Agua
                </v-card-text>
              
            </v-card>
<!-- N tarefa ja completo -->
            <v-card height="150" class="my-card">
              <v-card-title class="text-center">
                         Numero tarefa ja completo
               </v-card-title>
                <v-spacer></v-spacer>
                <v-card-text class="text-center text-h5 ">
                               Agua
                </v-card-text>
              
            </v-card>
<!-- numero tarefa completo por mes -->
            <v-card height="650" width="1130" class="my-card">
              <v-card-title class="text-center">
                Numero tarefa concluidos por mes:
               </v-card-title>
                <v-card-subtitle>
                  <BarChart />
                </v-card-subtitle>
        
            </v-card>
        </v-col>
<!-- segundo col -->
        <v-col cols="8">
          <v-card height="300">
              <v-card-title class="text-center">
                Numero tarefa concluidos por dia durante um semana:
               </v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle class="text-center">
                     <v-row >
                      <v-col cols="2">
                      </v-col>
                        <v-col cols="8">
                           <BarChart_pordia />
                        </v-col>
                     </v-row>     
                </v-card-subtitle>
            </v-card>
<!--card Tarefas -->
            <v-card height="315" class="my-card">
              <v-card-title class="text-center">
                Tarefas
               </v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle class="text-center text-h5">
                                    
                </v-card-subtitle>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import DoughnutChart from '../components/DoughnutChart.vue';
import BarChart_pordia from '../components/BarChart_pordia.vue';

export default {
  name: 'App',
  components: { BarChart, DoughnutChart, BarChart_pordia}
}

</script>

<style>
  .my-card{
    margin:16px 0
  }
</style>