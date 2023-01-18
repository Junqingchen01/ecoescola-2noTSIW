<template  >

    <v-container class="py-8 px-10"
     >
      <v-row>
        <v-col cols="12"   >
          <h1>Relatorio</h1>
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
              @click="$router.push({ name: 'dashboard' })"
            >
            Dashboard 
          </v-btn>
          <v-btn 
              class="mr-16"
              width="215"
              color="black"
              @click="$router.push({ name: 'relatorio' })"
            >
              Relatório 
          </v-btn>
        </v-col>
        <v-card 
        width="100%"
        height="100%">
          <v-col cols="12">
          <v-row>
            <v-col>
             <h1>Resumo</h1>
            </v-col>
            <v-col cols="12">
              <v-textarea  color="white" v-model="form.resumo" ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
             <h1>Processo</h1>
            </v-col>
            <v-col cols="12">
              <v-textarea  color="white" v-model="form.processo" ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
             <h1>Conclusão</h1>
            </v-col>
            <v-col cols="12">
              <v-textarea  color="white" v-model="form.conclucao" ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
                    <v-col>
                      <div class="text-center">
                            <v-btn
                              color="teal accent-2"
                              style="margin: 8px 8px;"
                              @click="alteracao()"
                            >
                               Altera relatorio
                            </v-btn>
                          </div>
                    </v-col>
                  </v-row>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
      return {
        newrelatorio:'',
          form:JSON.parse(localStorage.getItem("form")) || {
            resumo:'',
            processo:'',
            conclucao:'',
          }
          }
    },
    methods:{
      alteracao(){
        const newrelatorio={
          resumo:this.form.resumo,
          processo:this.form.processo,
          conclucao:this.form.conclucao
        };
        localStorage.setItem("form", JSON.stringify(newrelatorio));

        alert('Relatório está guardado!')
      }
    }

}
</script>