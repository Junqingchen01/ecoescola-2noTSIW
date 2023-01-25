<template>
    <v-container class="py-8 px-10">
        <v-row class=" d-flex justify-center ">
            <v-col cols="6" >
                <v-card>
                    <v-card-title>
                        <v-layout class=" d-flex justify-center align-center ">
                            <h3> LOGIN</h3>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-text-field
                              label="Nome de utilizador"
                              type="text"
                              v-model="username"></v-text-field>
                              <v-text-field
                              
                              label="Palavra-Passe"
                              type="text"
                              v-model="password"></v-text-field>


                              <div class="text-center pt-4">
                                    <v-btn 
                                    color="teal accent-3"
                                    width="400"
                                    @click="login()"
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
import { useUsersotre } from '../store/utilizador.js'
import { atividadestore } from '../store/atividades.js'

    export default{
        name:'login',
        data() {
            return {
               username:'',
               password:'',
               utilizadors: useUsersotre(),
               atividades:atividadestore(),
            
            }
        },
        methods:{
            login(){
                const user = this.utilizadors.getUsers.find(user=> user.username == this.username && user.password == this.password)
                const Onatividade = this.atividades.getAtividade.find(Onatividade => Onatividade.colaboradore == this.username)
                
                if(user) {
                    if(this.username === 'Admin'){
                        localStorage.setItem('isAdmin', true);
                        localStorage.setItem('isAuthenticated', true);
                        localStorage.setItem('userlogado', JSON.stringify(user));
                        localStorage.setItem('atividadeon', JSON.stringify(Onatividade));
                        alert('Welcome !');
                        
                        this.$router.push({ name: 'home' });
                        
                    }else{
                        localStorage.setItem('isAuthenticated', true);
                        localStorage.setItem('userlogado', JSON.stringify(user));
                        localStorage.setItem('atividadeon', JSON.stringify(Onatividade));
                        alert('Welcome !');
                        
                        this.$router.push({ name: 'home' });
                        
                    }
            
				}
				else{
                    alert('Wrong credentials!');
                }
            },
            
        }
    }
</script>

<style lang="scss" scoped>

</style>