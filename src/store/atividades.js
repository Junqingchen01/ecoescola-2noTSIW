import { defineStore } from 'pinia'

export const useCounterStore = defineStore('atividade', {
  state: () =>({
    atividades:[
      {
        nomeAtividade:"",
        diagonostico:"",
        objetivo:"",
        Metas:"",
        AtividadePrevista:"",
        Recursos:"",
        Intervenientes:"",
        Calendarizacao:"",
        Indicadores:"",
        Instrumentos:"",
      }
    ],
  }),
  })