<template>

        <v-container class="py-8 px-10"
         >
          <v-row>
            <v-col
            cols="13">
            <h1  class="text-left">Plano de Atividades </h1>
            <v-table style="border-radius:0.5%">
              <thead>
                <tr>
                  <th class="text-left">
                    Tema
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
                
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in atividades"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.nivel }}</td>
                  <td>{{ item.descricao}}</td>
                  <td>{{ item.objetivo }}</td>
                  <td>{{ item.diagnostico }}</td>
                  <td>{{ item.meta }}</td>
                  
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
            name: 'Frozen Yogurt',
            nivel: 'A',
            descricao:'asdhlkjasjhkdl',
            diagnostico: 159,
            objetivo:'fly',
            meta:'11',
            
          },
          {
            name: 'Ice cream sandwich',
            nivel:'C',
            descricao:'dasdfsa',
            diagnostico: 237,
            objetivo:'flly',
            meta:'22',
            
          },
        ],
      }
    },
    created() {
			if (!localStorage.getItem('atividades')) localStorage.setItem('atividades', JSON.stringify(this.atividades));
		},
    
  }
</script>