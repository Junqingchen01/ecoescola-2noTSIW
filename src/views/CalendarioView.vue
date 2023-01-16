<template>
  <v-container class="py-8 px-10">
    <v-row>
      <v-col cols="8">
        <h1 class="text-left">Calendario</h1>
        
        <div class="text-center section">
          <vc-calendar
            class="custom-calendar max-w-full"
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
            style="height: 700px;"
    
          >
            <template v-slot:day-content="{ day, attributes }">
              <div class="flex flex-col h-full z-10 overflow-hidden">
                <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
                <div class="flex-grow overflow-y-auto overflow-x-auto">
                  <p
                    v-for="attr in attributes"
                    
                    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                    :class="attr.customData.class"
                  >
                    {{ attr.customData.title }}
                  </p>
                </div>
              </div>
            </template>
          </vc-calendar>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card  
          style="margin:48px 0"
        >
          <v-card-title class="text-center">
            Criar Evento
          </v-card-title>

          <v-card-text>
                <v-row>
                  <v-col cols="4">
                  <v-select :items="days" v-model="form.dia"  label="DIA"></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select :items="months" v-model="form.mes" label="MES"></v-select>
                </v-col>
                  <v-col cols="4">
                  <v-select :items="years" v-model="form.ano" label="ANO"></v-select>
                </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <!-- <v-select :items="atividade" v-model="selectedAtividade" label="Atividade"></v-select> -->
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h2>Descrição</h2>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field  class="text-lg" v-model="form.titulo"></v-text-field>
                  </v-col>
                  <v-row>
                    <v-col>
                      <div class="text-center">
                            <v-btn
                              color="teal accent-2"
                              style="margin: 8px 8px;"
                              
                            >
                              Enviar
                            </v-btn>
                          </div>
                    </v-col>
                  </v-row>
                </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import { arrayTypeAnnotation } from '@babel/types';

export default {
  data() {
    const month = new Date().getMonth();
    const year = 2023;
    return {
      masks: {
        weekdays: 'WWW',
      },
      form:{
        dia:'',
        mes:'',
        ano:'',
        titulo:''
      },


      days: Array.from({length: 31}, (_, i) => i + 1),
      months: Array.from({length:12},(_, i) => i + 1),
      years: Array.from({length: 2}, (_, i) => new Date().getFullYear() - i),
      attributes: [
        {
          customData: {
            title: 'Lunch with mom.',
            class: 'bg-red-600 text-black',
          },
          dates: new Date(year, month, 1),
        },
        {
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-blue-500 text-black',
          },
          dates: new Date(year, month, 2),
        },
        {
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-blue-500 text-black',
          },
          dates: new Date(year, month, 5),
        },
        {          
          customData: {
            title: 'Take car to the shop',
            class: 'bg-indigo-500 text-black',
          },
          dates: new Date(year, month, 5),
        },
        {
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-teal-500 text-black',
          },
          dates: new Date(year, month, 7),
        },
        {  
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-pink-500 text-black',
          },
          dates: new Date(year, month, 11),
        },
        { 
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-orange-500 text-black',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {        
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-pink-500 text-black',
          },
          dates: new Date(year, month, 22),
        },
        {         
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-red-600 text-black',
          },
          dates: new Date(year, month, 25),
        },
        {
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-red-600 text-black',
          },
          dates: new Date(year, month, 31),
        },
      ],
    };
  },
  // methods:{
  //   addEvento(){
  //     const newcustoma={
  //       dia:this.form.dia,
  //       mes:this.form.mes,
  //       ano:this.form.ano,
  //       titulo:this.form.titulo,

  //         customData: {
  //           title: 'asdasddsa',
  //           class: 'bg-red-600 text-black',
  //           dates: new Date(year,month,dia)
  //         }    
  //     };
  //     attributes.push(newcustoma);
  //     alert('Novo atividade ja adicionou!')
  //     console.log(attributes)
  //   }
  // }
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #64ffda;
  --day-border-highlight: 1px solid #64ffda;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #64ffda;
  --weekday-border: 1px solid #64ffda;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #64ffda;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: #64ffda;
    &.weekday-1,
    &.weekday-7 {
      background-color: #64ffda;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>