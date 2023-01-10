import { defineStore } from 'pinia'

export const useCounterStore = defineStore('utilizador', {
  state: () =>({
    utilizadors:[
      {
        nome:"joao",
        apelido:'Rocha',
        email:'123456789@gmial.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
      },
      {
        nome:'admin',
        apelido:'Admin',
        email:'12345678@gmail.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
      },
    ],
  }),
  // created(){
  //   if (!localStorage.getItem('utilizadores')) localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores));
  // },
})
