import { defineStore } from 'pinia'

export const useUsersotre = defineStore('utilizador', {
  state: () =>({ 
    utilizadors:[
      { 

        nome:"Joao",
        apelido:'Rocha',
        username:'User',
        email:'123456789@gmail.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
        pontos:1,
        tarefas:0,
      },
      {
        nome:'admin',
        apelido:'Admin',
        username:'Admin',
        email:'12345678@gmail.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
      },
      {
        nome:'abc',
        apelido:'abc',
        username:'abc',
        email:'12345678@gmail.com',
        contacto:'123456789',
        password:'abc',
        localizacao:'aaaac',
      },
    ],
  }),
  getters: {
    getUsers: (state) => state.utilizadors,



    getInfByUsername: (state) =>
    (username) => state.utilizadors.find(utilizador => utilizador.username == username),


  },
})

