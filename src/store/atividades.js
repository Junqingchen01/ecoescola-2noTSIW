import { defineStore } from 'pinia'

export const atividadestore = defineStore('atividade', {
  state: () =>({
    atividades:[
      { 
        atividade: 'Frozen Yogurt',
        nivel: 'A',
        descricao:'asdhlkjasjhkdl',
        diagnostico: 159,
        objetivo:'fly',
        meta:'11',
        calendarizacao:'1',
        colaboradore:'User',
        status:'Em progresso',
        
      },
      {
        atividade: 'Ice cream sandwich',
        nivel:'C',
        descricao:'dasdfsa',
        diagnostico: 237,
        objetivo:'flly',
        meta:'22',
        calendarizacao:'1',
        colaboradore:'Admin',
        status:'Em progresso',
        
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
    ],
  }),
  getters:{
    getAtividade:(state) => state.atividades,

  
  }
  })