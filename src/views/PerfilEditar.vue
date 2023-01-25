<template>
    <v-container class="py-8 px-10">
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
                        {{ userlogado.nome }} {{ userlogado.apelido }}
                    </v-card-title>

                    <v-card-text class="text-center">
                            <v-btn 
                            color="secondary" @click=""
                            >
                            Carregar Nova Foto
                            </v-btn>
                    <v-spacer></v-spacer>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card
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
                                v-model="newnome"
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
                                 v-model="newapelido"
                                 >
                                </v-text-field>

                            </v-col>  
                            <v-col cols="5" class="ma-2 pa-2">
                                <v-card-subtitle class="text-left font-weight-black">
                                    E-mail
                                </v-card-subtitle>
                                <v-text-field
                                v-model="newmail"
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
                                v-model="newcontacto"
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
                                v-model="newpassword"
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
                                v-model="newlocal"
                                 label
                                 required
                                 >
                                </v-text-field>

                            </v-col>
                            </v-row>
                            
                        </v-container>
                            <v-btn 
                            color="secondary" 
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
import { useUsersotre } from '../store/utilizador.js'

    export default {
        data() {
            return {
                utilizadors:useUsersotre(),
                userlogado:JSON.parse(localStorage.getItem('userlogado')),
                newnome:'',
                newapelido:'',
                newmail:'',
                newcontacto:'',
                newpassword:'',
                newlocal:'',
                // updateUser(){

                //     userlogado.dispatch('updateUser', { nome: this.newnome, email: this.newmail ,
                //     apelido:this.newapelido,  contacto:this.newcontacto, password:this.newpassword, localizacao: this.newlocal});
                // }
            }
        },
        // methods:{
        //     Guardar(){
        //         const newDados = {
        //             nome:this.newnome,
        //             apelido:this.newapelido,
        //             email:this.newmail,
        //             contacto:this.newcontacto,
        //             pawssword:this.newpassword,
        //             localizacao:this.newlocal,
        //         }
        //         this.utilizadors.Guardar(newDados)
        //         alert('Dados guardar com sucesso!')
        //         this.$router.push({name:'perfil'})
        //     }
        // }
    }
</script>

<style lang="scss" scoped>

</style>