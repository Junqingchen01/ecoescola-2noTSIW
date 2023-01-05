<template>

        <v-container class="py-8 px-10"
         >
          <v-row>
            <v-col cols="12" ms="3">
              <h1>Plano de Atividades </h1>
              <v-btn 
                  class="mr-2 "
                  @click="$router.push({ name: 'table' })"
                >
                Gestão de Projeto
              </v-btn>
              <v-btn 
                  class="mr-2"
                  color="black"
                  @click="$router.push({ name: 'table' })"
                >
                  Plano de atividade
              </v-btn>
              <v-btn 
                  class="mr-2"
                  @click="$router.push({ name: 'table' })"
                >
                Dashboard 
              </v-btn>
              <v-btn 
                  class="mr-2"
                  @click="$router.push({ name: 'table' })"
                >
                  Relatório 
              </v-btn>
            </v-col>
            <v-col
            cols="12">
            
            <v-table style="border-radius:0.5%">
              <thead>
                <tr>
                  <th class="text-left">
                    Atividade
                  </th>
                  <th class="text-left">
                    Nivel
                  </th>
                  <th class="text-left">
                    Descrição
                  </th>
                  <th class="text-left">
                    Objetivo
                  </th>
                  <th class="text-left">
                    Diagonóstico
                  </th>
                  <th class="text-left">
                    Metas
                  </th>
                  <th class="text-left">
                    Calendarização
                  </th>
                
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in atividades"
                  :key="item.name"
                >
                  <td>{{ item.atividade }}</td>
                  <td>{{ item.nivel }}</td>
                  <td>{{ item.descricao}}</td>
                  <td>{{ item.objetivo }}</td>
                  <td>{{ item.diagnostico }}</td>
                  <td>{{ item.meta }}</td>
                  <td>{{ item.calendarizacao }}</td>
                  
                </tr>
              </tbody>
            </v-table>
            <div class="text-center pt-2">
                <v-btn 
                  style="background-color: #6DECB9;"
                  class="mr-2"
                  @click="$router.push({ name: 'addatividade' })"
                >
                  Add Atividade
                </v-btn>
                
              </div>
            </v-col>
          </v-row>
        </v-container>
</template>

<script>
  export default {
    data () {
      return {
        atividades: [
          { 
            atividade: 'Frozen Yogurt',
            nivel: 'A',
            descricao:'asdhlkjasjhkdl',
            diagnostico: 159,
            objetivo:'fly',
            meta:'11',
            calendarizacao:'1',
            
          },
          {
            atividade: 'Ice cream sandwich',
            nivel:'C',
            descricao:'dasdfsa',
            diagnostico: 237,
            objetivo:'flly',
            meta:'22',
            
          },
          { 
            atividade: 'apple',
            nivel: 'A',
            descricao:'asdhlkjasjhkdl',
            diagnostico: 159,
            objetivo:'fly',
            meta:'11',
            calendarizacao:'1',
            
          },
          { 
            atividade: 'apple plus pro max ',
            nivel: 'A',
            descricao:'asdhlkjasjhkdl',
            diagnostico: 159,
            objetivo:'fly',
            meta:'11',
            calendarizacao:'1',
            
          },
          
        ],
      }
    },
    created() {
			if (!localStorage.getItem('atividades')) localStorage.setItem('atividades', JSON.stringify(this.atividades));
		},
    
  }
</script>