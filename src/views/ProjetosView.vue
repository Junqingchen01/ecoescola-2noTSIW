<template >

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
                <v-col cols="5" class="d-flex align-center justify-center">
                  
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
          <v-card height="300" color="grey darken-1">  
            <div class="d-flex justify-end">
              <v-card-title >
                Atas
              </v-card-title>
            </div>  
          </v-card>
<!-- treicra card grande -->
          <v-card height="300">  
            
          </v-card>
        </v-col>
<!-- segundo col -->
        <v-col cols="4">
          <v-card height="300">
            <v-table no-border>
              <thead>
                <th class="text-center">
                  icons
                </th>
                <th>
                  Nome
                </th>
                <th>
                  Cargo
                </th>
              </thead>
              <tbody>
                <tr v-for="item in Menbros" :key="item.name" class="text-center">
                  <td>{{  item.icon }}</td>
                  <td>{{  item.nome }}</td>
                  <td>{{  item.cargo }}</td>
                </tr>
              </tbody>
            </v-table>
            <div class="text-center pt-2">
              <v-btn
                class="mx-2"
                color="#11999E"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
          </v-card>

          <v-card height="300" style="margin:16px 0">

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  data() {
    return {
      Menbros: [
        {
          icon:require('../assets/icon.png'),
          nome:'James',
          cargo:'admin'
        },
        {
          icon:'img',
          nome:'chen',
          cargo:'professor'
        },
      ]
    }
  },

}
</script>

<style>
 
</style>