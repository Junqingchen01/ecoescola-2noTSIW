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
                  
                ></v-text-field>
              </v-col>
             <!-- <small>Coordenador</small> 

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nome*"
                  required
                ></v-text-field>
              </v-col>
              
              
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Apelido*"
                  
                  persistent-hint
                  required
                ></v-text-field>
              </v-col> -->

              <v-col cols="12">
                <v-text-field
                  label="Descrição do Atividade*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Objetivos do Atividade*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Diagonóstico da atividade*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Metas da atividade*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Calendarização*"
                  required
                ></v-text-field>
              </v-col>

              <v-select
                  :items="['A', 'B', 'C', 'D','E']"
                  label="Nivel*"
                  
                  required
                ></v-select>
              
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
        
      }
    },
    methods:{
      addatividade(){

        alert('Novo atividade ja adicionou!')
        this.$router.push({ name:'home'})


        // const atividades = JSON.parse(localStorage.getItem('atividades'));

        // const newatividade={
        //     name: this.from.name,
        //     nivel: this.from.nivel,
        //     descricao:'asdhlkjasjhkdl',
        //     diagnostico: 159,
        //     objetivo:'fly',
        //     meta:'11',
        // };

        // atividades.push(newatividade);

        // localStorage.setItem('atividades', JSON.stringify(atividades));
        
      

      }
    }
  }
</script>