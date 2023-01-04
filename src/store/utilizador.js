import { defineStore } from 'pinia'

export const useCounterStore = defineStore('utilizador', {
  state: () =>({
    utilizadors:[
      {
        id:0,
        tipo:"",
        nome:"",
        email:"",
        password:"",
      }
    ],
  }),
  })
