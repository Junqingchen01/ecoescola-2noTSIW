<template>
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="py-10 ">
          <v-card-title>
            <span class="text-h5">Criação de Atividade</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
              <v-col cols="12">
                  <v-text-field
                    label="Nome da Atividade*"
                    required
                    v-model="form.atividade"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Descrição do Atividade*"
                    required
                    v-model="form.descricao"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Objetivos do Atividade*"
                    required
                    v-model="form.objetivo"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Diagonóstico da atividade*"
                    required
                    v-model="form.diagnostico"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Metas da atividade*"
                    required
                    v-model="form.meta"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Calendarização*"
                    required
                    v-model="form.calendarizacao"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="colaboradore*"
                    required
                    v-model="form.colaboradore"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-select 
                      :items="['Em progresso','completo']"
                      label="status*"
                      v-model="form.status"
                      required
                    ></v-select>
                </v-col>

                <v-col cols="12">
                <v-select
                    :items="['A', 'B', 'C', 'D','E']"
                    label="Nivel*"
                    v-model="form.nivel"
                    required
                  ></v-select>
                </v-col>

                
                  <v-col cols="12" class="text-center">
                    <h1>Menbros</h1>
                  </v-col>

                  <v-col cols="6">
                    <v-list>
                            <v-list-item v-for="(menbro, index) in menbros" :key="index">
                              <v-list-item-title>Nome do menbro <v-spacer></v-spacer>{{ menbro }}</v-list-item-title>
                            </v-list-item>
                      </v-list>
                  </v-col>

                  <v-col cols="6">
                    <v-list>
                            <v-list-item v-for="(Email, index) in Emails" :key="index">
                              <v-list-item-title>Endereço de E-mail <v-spacer></v-spacer>{{ Email }}</v-list-item-title>
                            </v-list-item>
                      </v-list>
                  </v-col>
                  <v-col class="text-center">
                    <v-dialog
                      v-model="dialog"
                    >
                      <template v-slot:activator="{ props }">
                        
                          <v-btn
                            color="teal accent-2"
                            v-bind="props"
                            
                          >
                          Adicionar Menbro
                          </v-btn>

                      </template>

                      <v-card>
                        <v-card-text>
                          <v-row>
                            <v-col cols="8">
                              <v-text-field v-model="newMenbro" @keyup.enter="addMenbro" label="Entrar o nome de membro para convidar."></v-text-field>
                              <v-divider></v-divider>
                              <v-divider></v-divider>
                              <v-text-field v-model="newEmail" @keyup.enter="addMenbro" label="Entrar E-mail do endereço."></v-text-field>
                            </v-col>
                            <v-col>
                              <v-btn 
                                style="margin:48px 0"
                                color="teal accent-2" 
                                @click="addMenbro">Adicionar Menbro
                              </v-btn>
                            </v-col>
                          </v-row>

                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="teal accent-2" block @click="dialog = false">Close Dialog</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="teal accent-2"
              class="mr-2"
              
              @click="addatividade()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
  </v-row>
  
</template>

<script>
  export default {
    name:'Addatividade',
    data() {
      return {
          newMenbro:'',
          menbros: JSON.parse(localStorage.getItem("menbros")) || ['CHEN',],
          newEmail:'',
          Emails: JSON.parse(localStorage.getItem("Emails")) || ['123456789@123.com',],
          dialog: false,
          
          form:{
            atividade:'',
            nivel:'',
            descricao:'',
            diagnostico:'',
            objetivo:'',
            meta:'',
            calendarizacao:'',
            colaboradore:'',
            status:'',
          }
      }
    },
    methods:{
      addMenbro() {
      if (this.newMenbro,this.newEmail) {
        this.menbros.push(this.newMenbro);
        this.newMenbro = '';
        localStorage.setItem("menbros", JSON.stringify(this.menbros));

        this.Emails.push(this.newEmail);
        this.newEmail = '';
        localStorage.setItem("Emails", JSON.stringify(this.Emails));

        alert('ja convidar um menbro novo');
      }
    },
      addatividade(){
        const atividades = JSON.parse(localStorage.getItem('atividades'));

        const newatividade={
            atividade: this.form.atividade,
            nivel: this.form.nivel,
            descricao: this.form.descricao,
            diagnostico:  this.form.diagnostico,
            objetivo: this.form.objetivo,
            meta: this.form.meta,
            calendarizacao: this.form.calendarizacao,
            colaboradore: this.form.colaboradore,
            status: this.form.status

        };

        atividades.push(newatividade);
        localStorage.setItem('atividades', JSON.stringify(atividades));
        alert('Novo atividade ja adicionou!')
        this.$router.push({ name:'table'});

        
      }
    },
  };
  // localStorage.setItem('atividades', JSON.stringify(atividades));
</script>