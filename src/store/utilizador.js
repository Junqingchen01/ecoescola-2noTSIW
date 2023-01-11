import { defineStore } from 'pinia'



export const useUsersotre = defineStore('utilizadors', {
  state: () =>({ 
    utilizadors:[
      {
        nome:"joao",
        apelido:'Rocha',
        username:'User',
        email:'123456789@gmail.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
        pontos:'',
      },
      // {
      //   nome:'admin',
      //   apelido:'Admin',
      //   email:'12345678@gmail.com',
      //   contacto:'123456789',
      //   password:'Esmad_2223',
      //   localizacao:'Esmad',
      // },
    ],
  }),
  getters: {
    getUsers: (state) => state.utilizadors,
  },
})
