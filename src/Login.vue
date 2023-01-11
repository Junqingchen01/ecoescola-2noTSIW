<template>
    <v-container class="py-8 px-10">
        <v-row class=" d-flex justify-center align-center ">
            <v-col cols="6" >
                <v-card>
                    <v-card-title>
                        <v-layout class=" d-flex justify-center align-center ">
                            <h3> LOGIN</h3>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-text-field
                            
                              outline
                              label="Nome de utilizador"
                              type="text"
                              v-model="username"></v-text-field>
                              <v-text-field
                              outline
                              hide-details
                              label="Palavra-Passe"
                              type="password"
                              v-model="password"></v-text-field>

                              <div class="text-center pt-4">
                                    <v-btn 
                                    color="teal accent-3"
                                    width="400"
                                    >
                                    LOGIN
                                    </v-btn>

                                </div>
                        </v-card-text>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default{
        data() {
            return {
               
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>