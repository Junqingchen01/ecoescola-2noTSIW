import { defineStore } from 'pinia'

export const useCounterStore = defineStore('atividade', {
  state: () =>({
    atividades:[
      {
        tema:"",
        NomeAtividade:"",
        nivel:"",
        descricao:"",
        objetivo:"",
        meta:"",
        calendarizacao:"",
        colaboradores:"",
        status:"",
        
      }
    ],
  }),
  })