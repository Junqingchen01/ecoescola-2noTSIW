<template>
    <v-row justify="center">
      <v-card class="py-10 px-10">
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
  </v-row>
  
</template>

<script>
  export default {
    name:'Addatividade',
    data() {
      return {
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
        this.$router.push({ name:'table'})

      }
    }
  };
  // localStorage.setItem('atividades', JSON.stringify(atividades));
</script>