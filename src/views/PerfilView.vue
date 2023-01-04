<template>
     <v-container class="py-8 px-10"
         >
          <v-row>
            <v-col
            cols="4">
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
                            color="secondary"
                            >
                            Editar 
                            </v-btn>
                    <v-spacer></v-spacer>
                    </v-card-text>
                </v-card>
                
            </v-col>
            <v-col
            cols="2.5">
                <v-card
                        class="text-left"
                        max-width="300"
                    >
                        <v-card-title class="text-center">
                            Atividade área
                        </v-card-title>

                        <v-card-subtitle class="text-center">
                            Contacto:
                        </v-card-subtitle>
                        <v-card-subtitle class="text-center">
                            E-mail:
                        </v-card-subtitle>
                        <v-card-text class="text-center">
                
                            
                        </v-card-text>
                    </v-card>
                    
            </v-col>
            <v-col
            cols="2.5">
                <v-card
                        class="text-left"
                        max-width="300"
                    >
                        <v-card-title class="text-center">
                            Nº atividades concluidos
                            
                        </v-card-title>

                        <v-card-subtitle class="text-center">
                            Contacto:
                        </v-card-subtitle>
                        <v-card-subtitle class="text-center">
                            E-mail:
                        </v-card-subtitle>
                    </v-card>
                    
            </v-col>
            <v-col
            cols="2.5">
                <v-card
                        class="text-left"
                        max-width="300"
                    >
                        <v-card-title class="text-center">
                            Pontos ja ganhos
                        </v-card-title>

                        <v-card-subtitle class="text-center">
                            Contacto:
                        </v-card-subtitle>
                        <v-card-subtitle class="text-center">
                            E-mail:
                        </v-card-subtitle>
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