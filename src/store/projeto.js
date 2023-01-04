import { defineStore } from 'pinia'

export const useCounterStore = defineStore('projetos', {
  state: () =>({
    projetos:[
      {
        nome:"",
        users:[],
        atas:[],
        eventos:[],
      }
    ],
  }),
  })