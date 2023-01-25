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
        cargo:'professor',
      },
      {
        nome:'admin',
        apelido:'Admin',
        username:'Admin',
        email:'12345678@gmail.com',
        contacto:'123456789',
        password:'Esmad_2223',
        localizacao:'Esmad',
        pontos:11,
        tarefas:10,
        cargo:'admin1',
      },
      {
        nome:'abc',
        apelido:'abc',
        username:'abc',
        email:'12345678@gmail.com',
        contacto:'123456789',
        password:'abc',
        localizacao:'aaaac',
        cargo:'studant'
      },
    ],
  }),
  getters: {
    getUsers: (state) => state.utilizadors,

    getInfByUsername: (state) =>
    (username) => state.utilizadors.find(utilizador => utilizador.username == username),

    isAuthenticated:(state) =>state.userlogado,

  },
  actions:{
    // Guardar(newDados){
    //   const user = this.utilizadors.find(user=> user.username == this.username)

    //   this.user.set({
    //     nome:newDados.nome,
    //     apelido:newDados.apelido,
    //     email:newDados.email,
    //     contacto:newDados.contacto,
    //     password:newDados.password,
    //     localizacao:newDados.localizacao,
    //   })

    // },
    updateUser(context,payload){
      context.commit('updateUser',payload);
    }
  },
  mutations: {
    updateUser(state, payload) {
      state.utilizadors.pontos = payload.pontos;
      state.utilizadors.tarefas = payload.tarefas;
    }
  }
  
})

