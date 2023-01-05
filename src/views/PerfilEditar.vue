<template>
    <v-container class="py-10 px-10">
        <v-row>
            <v-col cols="4" ms="3">
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
            <v-col>
                <v-card
                    class="text-left"
                    width="700"
                    height="650"
                >
                    <v-card-title class="text-center">
                    Editar Perfil
                    </v-card-title>
                    <v-card-text class="text-center">
                        <v-container  >
                            <v-row justify="center">
                                <v-col cols="5" class="ma-2 pa-2" >
                                <v-card-subtitle class="text-left font-weight-black">
                                    Nome
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            
                            <v-col cols="5" class="ma-2 pa-2" >
                                <v-card-subtitle class="text-left font-weight-black">
                                    Apelido
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>  
                            <v-col cols="5" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    E-mail
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            
                            <v-col cols="5" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    Contacto
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>

                            <v-col cols="5" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    Password
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            <v-col cols="5" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    Confirmar Password
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            

                            
                            <v-col cols="10" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    Localização
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            </v-row>
                            
                        </v-container>
                            <v-btn 
                            color="secondary" @click="Guardar()"
                            >
                            Guardar Alterações 
                            </v-btn>
                    <v-spacer></v-spacer>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            Guardar(){
                alert('Dados guardar com sucesso!')
                this.$router.push({name:'perfil'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>