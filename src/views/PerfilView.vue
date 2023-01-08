<template>
     <v-container class="py-8 px-10"
         >
          <v-row >
            
            <v-col  cols="3"
            >
            <h1  class="text-left">Perfil</h1>  
            <v-card
                    class="text-left"
                    max-width="350"
                >
                    <v-img
                    src="../assets/icon.png"
                    height="400px"
                    cover
                    ></v-img>

                    <v-card-title class="text-center">
                    James
                    </v-card-title>

                    <v-card-subtitle class="text-center">
                        Contacto:
                    </v-card-subtitle>
                    <v-card-subtitle class="text-center">
                        E-mail:
                    </v-card-subtitle>

                    <v-card-text class="text-center">
                            <v-btn 
                            color="secondary" @click="$router.push({ name: 'perfileditar' })"
                            >
                            Editar 
                            </v-btn>
                    <v-spacer></v-spacer>
                    </v-card-text>
                </v-card>
            </v-col>
<!-- MAIN -->
<!-- Atividade area -->
            <v-col
                cols="3" 
                no-gutters>
                    <v-card
                         width="250"
                         height="100"
                         style="margin-top:47px;"
                        >
                            <v-card-title class="text-center">
                                Atividade área
                            </v-card-title>
                            <v-spacer></v-spacer>
                                <v-card-subtitle class="text-center text-h5">
                                    ESMAD
                                </v-card-subtitle>
                        </v-card>
 <!-- atividade em progresso -->
                        <v-card
                            width="536"
                            height="220"
                            style="margin:16px 0"
                        >
                            <v-card-title class="text-center">
                                Atividades em progresso:                  
                            </v-card-title>
                            <v-card-text class="text-center">
                                Numero
                            </v-card-text>
                            
                            <v-card-title class="text-center">
                                Ações e Atividades Previstas:                   
                            </v-card-title>
                            <v-card-text class="text-center">
                                
                            </v-card-text>
                        </v-card>
<!--Numero atividades concluidos por mes-->
                        <v-card
                            width="536"
                            height="200"
                            style="margin:16px 0"
                        >
                            <v-card-title class="text-center">
                                Numero tarefa concluidos por mes:                  
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="3"></v-col>
                                    <v-col cols="7">
                                        <BarChart />
                                    </v-col>
                                </v-row>
                            </v-card-text>

                        </v-card>

                </v-col>
 <!-- Numero atividades concluidos-->
                <v-col  cols="3" >
                    <v-card
                            max-width="250"
                            height="100"
                            style="margin-top: 47px;"
                        >
                            <v-card-title class="text-center">
                                Nº atividade concluido                   
                            </v-card-title>
                            <v-card-subtitle class="text-center">
                                Numero
                            </v-card-subtitle>
                            
                        </v-card>
                        
                        
                </v-col>
<!-- pontos ja ganhos -->
                <v-col  cols="3" 
                >
                    <v-card
                            max-width="250"
                            height="100"
                            style="margin-top: 47px;"
                        >
                            <v-card-title class="text-center">
                                Pontos ja ganhos
                            </v-card-title>

                            <v-card-subtitle class="text-center">
                                Pontos
                            </v-card-subtitle>

                    </v-card>
<!-- metas -->
                    <v-card
                            max-width="250"
                            height="220"
                            style="margin:16px 0"
                            
                        >
                            <v-card-title class="text-center">
                                Metas:                  
                            </v-card-title>
                            <v-card-text class="text-center">
                                Metass
                            </v-card-text>
                    
                    </v-card>
<!--Progresso total do projeto-->
                    <v-card
                            max-width="250"
                            height="200"
                            style="margin:16px 0"
                        >
                            <v-card-title class="text-center">
                                Progresso total
                                             
                            </v-card-title>
                            <v-card-text>
                                
                            </v-card-text>
                    
                    </v-card>
                    
                </v-col>
 
          </v-row>
    </v-container>
</template>

<script>
import BarChart from '../components/BarChart.vue'

    export default {
        name: 'App',
         components: { BarChart, }
    }
</script>

<style lang="scss" scoped>

</style>