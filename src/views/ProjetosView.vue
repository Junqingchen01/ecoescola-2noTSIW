<template>
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
        <v-col cols="8" >
<!-- primeiro card  -->
          <v-card height="430">  
              <v-row>
                <v-col cols="5">
                    <v-card >
                      <v-card-title>
                        Criar uma Convocatória
                      </v-card-title>
                      <v-card-text>
                        <v-text-field
                        label="Dia"
                      ></v-text-field> 
                      <v-text-field
                        label="Horas"
                      ></v-text-field>
                      <v-text-field
                        label="Sessção"
                      ></v-text-field>
                      <v-text-field
                        label="Comfirma até"
                      ></v-text-field>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          color="teal accent-2"
                          style="margin: 8px 8px;"
                        >
                          Enviar
                        </v-btn>
                      </div>
                    </v-card>
                </v-col>
                <v-col cols="6" class="d-flex align-center justify-center">
                    <v-card>
                      <v-row>
                        <v-col>
                          <v-card-title >
                            Olá João, Confirma a tua presença: 
                          </v-card-title>
                          <div class="text-center">
                            <v-btn
                              color="teal accent-2"
                              style="margin: 8px 8px;"
                            >
                              Sim, vou
                            </v-btn>
                            <v-btn
                              color="teal accent-2"
                              style="margin: 8px 8px;"
                            >
                              Não vou
                            </v-btn>
                          </div>
                          <v-card-subtitle class="text-left font-weight-black">
                                    Comentarios
                                </v-card-subtitle>
                                <v-text-field
                                 label
                                 required>
                          </v-text-field> 
                          <div class="text-center">
                            <v-btn
                              color="teal accent-2"
                              style="margin: 8px 8px;"
                            >
                              Enviar
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card> 
                </v-col>
              </v-row>
          </v-card>
<!-- segunda card grande -->
          <v-card height="450" color="grey darken-1">  
            <div class="d-flex justify-end">
              <v-card-title >
                Atas
              </v-card-title>
            </div>  
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row >
                    <v-col cols="12">
                      <v-layout class="d-flex align-center">
                         Data do Início:   
                        <v-text-field  type="time" class="textcss" variant="solo" v-model="dataInicio"></v-text-field>
                      </v-layout> 

                      <v-layout class="d-flex align-center">
                        Grau da Sessão:
                        <v-select 
                        class="textcss"
                      :items="['Menos Importante','Mais Importante','Normal']"
                      variant="solo"
                      v-model="grau"
                      required
                    ></v-select>
                      </v-layout>

                      <v-layout class="d-flex align-center">
                        Tipo da Sessão:
                     
                        <v-select 
                        class="textcss"
                      :items="['Online','Presente',]"
                      variant="solo"
                      v-model="tipo"
                      required
                    ></v-select>
                      </v-layout> 

                      <!-- <v-layout> -->
                          Descrição da Sessão:
                          <v-text-field   variant="solo" style="height: 100px;" v-model="descricao"></v-text-field>
                      <!-- </v-layout>    -->
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row >
                    <v-col cols="11">

                      <v-layout class="d-flex align-center">
                        Data do Fim:
                        <v-text-field type="time" class="textcss" variant="solo" v-model="datafim"></v-text-field>
                      </v-layout>

                      <v-layout class="d-flex align-center">
                      Inserir fotos:
                        <v-text-field  class="textcss" variant="solo" style="height: 100px;">
                        </v-text-field>
                      </v-layout> 
                      <div  class="d-flex align-center justify-center">
                            <v-btn
                              rounded="pill"
                              color="teal accent-2"
                              style="width: 90px; height:30px ; margin-left:20%; margin-top:0px ;"
                            >
                              Submeter 
                            </v-btn>
                      </div>
                      
                      <div class="d-flex justify-end align-end">
                        <v-btn @click="uploadFile()" color="teal accent-2" style="width:250px; height: 60px; ,margin-top: 450px;" >
                          Enviar Ata 
                        </v-btn>
                      </div>

                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
<!-- treicra card grande -->
          <v-card height="200">  
            <v-row>
              <v-col>
                <v-list>
                  <v-list-item v-for="file in files" :key="file.id" >
                    <v-list-item-icon>
                      <v-icon @click="openDialog(file)" icon="mdi-folder" ></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ file.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-dialog v-model="dialog1" >
                  <v-card>
                    <v-card-title class="text-center">
                      {{ dialog1Data.title }}
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="6">
                            <div>Data de Inicio: {{dialog1Data.dataInicio}}</div>
                            <div>Grau da Sessão:{{dialog1Data.grau}}</div>
                            <div>Tipo de Sessão:{{dialog1Data.tipo}}</div>
                            <div>Descrição da Sessão: {{dialog1Data.descricao}}</div>
                        </v-col>

                        <v-col cols="6">
                          <div>Data de Fim:{{dialog1Data.datafim}}</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    
                      <div class="text-center">
                        <v-btn color="teal accent-2" @click="closeDialog">Fechar</v-btn>
                      </div>
                    
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
<!-- segundo col -->
        <v-col cols="4">
          <v-card height="300">
            <v-table >
              <thead>
                <th>
                  Nome
                </th>
                <th>
                  Cargo
                </th>
              </thead>
              <tbody>
                <tr v-for="item in Membros" :key="item.name" class="text-center">
                  <td> {{ item.nome }} </td>
                  <td> {{ item.cargo }} </td>
                </tr>
              </tbody>
            </v-table>
             
                  <div class="text-center">
                    <v-dialog
                      v-model="dialog"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                        v-if="isAdmin"
                        color="teal accent-2"
                          v-bind="props"
                        >
                        Adicionar Membro
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-text>
                          <v-row>
                            <v-col cols="12">
                              <v-card-title class="text-center"  >
                                <div  class="cardtitle" >
                                  Convidar um membro ESMAD
                                </div>  
                              </v-card-title>
                              <v-layout class="d-flex align-center">
                              Nome:
                              <v-text-field v-model="form.nome" @keyup.enter="addMenbro" ></v-text-field>
                              </v-layout> 
                              

                              <v-layout class="d-flex align-center"> 
                                Cargo:
                                <v-text-field v-model="form.cargo" @keyup.enter="addMenbro"></v-text-field>
                              </v-layout>
                              <v-layout class="d-flex align-center"> 
                                Email:
                                <v-text-field  @keyup.enter="addMenbro"></v-text-field>
                              </v-layout>
                            </v-col>
                            <v-col>
                              <div class="text-center">
                                <v-btn 
                                  color="teal accent-2" 
                                  @click="addMenbro">Adicionar
                                </v-btn>
                                
                              </div>
                            </v-col>
                          </v-row>

                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </div>
            
          </v-card>
<!-- chat -->
          <v-card  style="margin:16px 0" v-bind:style="{ 'overflow-y': 'scroll','height':'300px' }">
            <v-card-text>
                  <v-row>
                    <v-col v-for="message in messages" :key="message" cols="12">
                      <v-card>
                        <v-card-text>{{ message }}</v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
              </v-card-text> 
              <v-divider></v-divider>  
              <v-card-actions>
                <v-text-field v-model="messageText" label="Enviar uma mensagem ...."></v-text-field>
                <v-btn @click="sendMessage" color="#11999E">Send</v-btn>  
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import {useUsersotre} from'../store/utilizador.js'

export default {
  data() {
    return {
          messageText: '',
          messages: (localStorage.getItem('messages')) || ['hellow','ola',],
          
          dialog: false,
          isAdmin:(localStorage.getItem('isAdmin')),

          newFileData: '',
          dataInicio:'',
          grau:'',
          tipo:'',
          descricao:'',
          datafim:'',

          files:(localStorage.getItem('files')) || [],
          dialog1: false,
          dialog1Data: {},
          
          users: useUsersotre(),

          form:{
            nome:'',
            cargo:'',
          },
          
          Membros:
          [
            {
              nome:'joao',
              cargo:'admin'
            },
            {
              nome:'chen',
              cargo:'membro'
            }
    ],
  }
    
  },
  methods:{
    sendMessage() {
      if (this.messageText) {
        this.messages.push(this.messageText)

        this.messageText = ''
        localStorage.setItem("messages", JSON.stringify(this.messages));
        console.log(this.messageText)
      }
    },
    addMenbro() {
      
        if(this.form.nome, this.form.cargo){
          const Membros = JSON.parse(localStorage.getItem('Membros'));
        const newMembro ={
          nome:this.form.nome,
          cargo:this.form.cargo
        };

        Membros.push(newMembro);
        localStorage.setItem('Membros', JSON.stringify(Membros));
        alert('ja convidar um menbro novo');
      
        }
    },
    openDialog(file) {
      this.dialog1Data = file
      this.dialog1 = true
    },
    closeDialog() {
      this.dialog1 = false
    },
    uploadFile() {
      if(this.dataInicio,this.grau,this.tipo,this.descricao,this.datafim){
        this.files.push({
        title: 'Ata'+ this.files.length,
        data: this.newFileData,

        dataInicio:this.dataInicio,
        grau:this.grau,
        tipo:this.tipo,
        descricao:this.descricao,
        datafim:this.datafim,
      })
      this.newFileData = ''
      localStorage.setItem("files", JSON.stringify(this.files));
      }
    },
  },
  created() {
			if (!localStorage.getItem('Membros')) localStorage.setItem('Membros', JSON.stringify(this.Membros));
      else{
        this.Membros = JSON.parse(localStorage.getItem('Membros'))
      }
		},
}
</script>

<style>
  .textcss{
    margin-top:20px;
    height: 70px;
  }
  .cardtitle{
    color:#4DB6AC
  }
</style>