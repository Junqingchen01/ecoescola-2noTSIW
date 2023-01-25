import { defineStore } from 'pinia'

export const atividadestore = defineStore('atividade', {
  state: () =>({
    atividades:[
      { 
        id:1,
        atividade: 'user ativid',
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
        id:2,
        atividade: 'admin ativi',
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
        id:3,
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

    getAtividadeById: (state) =>
    (id) => state.todos.find(todo => todo.id == id),

  
  },
  actions:{
    setStatus(id){
      const atividade = this.atividade.find(atividade =>atividade.id == id)
      if(atividade.status =='Em progresso'){
        atividade.status == 'Completo'
      }
    }
  }
  })