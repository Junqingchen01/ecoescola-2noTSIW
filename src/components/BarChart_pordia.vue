<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      
    />
  </template>
  
<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart_pordia',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Segunda-feira', 'terça-feira', 'Quarta-feira','Quinta-feira','Sexta-feira','Sabado','Domingo' ],
          datasets: [ { 
            data: [40, 20, 12, 21, 16, 29, 23],
            backgroundColor: '#11999E',
        }, ],
          
        },
        chartOptions: {
          responsive: true
        },
        }
      }
    }

  </script>