<template>
     <v-container class="py-8 px-12"
         >
          <v-row no-gutters>
            
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
            <v-col
                cols="3" class="ma-2" 
                no-gutters>
                    <v-card
                         width="250"
                         style="margin-top:40px;"
                        >
                            <v-card-title class="text-center">
                                Atividade área
                            </v-card-title>
                                <v-card-subtitle class="text-center text-h5">
                                    ESMAD
                                </v-card-subtitle>
                            <v-card-subtitle class="text-center">                          
                            </v-card-subtitle>
                            <v-card-text class="text-center">
                            </v-card-text>
                        </v-card>
                        
                        <v-card
                            width="500"
                            height=""
                            style="margin:8px 0"
                        >
                            <v-card-title class="text-center">
                                Nº atividades concluidos                   
                            </v-card-title>
                            <v-card-subtitle class="text-center">
                                Numero
                            </v-card-subtitle>
                            <v-card-text class="text-center">
    
                            </v-card-text>
                        </v-card>

                </v-col>
                
                <v-col  cols="3" class="ma-2" style="margin: 0 8px;"
                >
                    <v-card
                            max-width="250"
                            style="margin-top: 40px;"
                        >
                            <v-card-title class="text-center">
                                Nº atividades concluidos                   
                            </v-card-title>
                            <v-card-subtitle class="text-center">
                                Numero
                            </v-card-subtitle>
                            <v-card-text class="text-center">
    
                            </v-card-text>
                        </v-card>
                        
                        
                </v-col>
                <v-col  cols="3" class="ma-2" style="margin: 0 8px;"
                >
                    <v-card
                            max-width="250"
                            style="margin-top: 40px;"
                        >
                            <v-card-title class="text-center">
                                Pontos ja ganhos
                            </v-card-title>

                            <v-card-subtitle class="text-center">
                                Pontos
                            </v-card-subtitle>
                            <v-card-subtitle class="text-center">                     
                            </v-card-subtitle>
                            <v-card-text class="text-center">
                            </v-card-text>
                        </v-card>
                    </v-col>
 
          </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>