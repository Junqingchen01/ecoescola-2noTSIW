<template>
    <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      
      
    />
  </template>
  
<script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'DoughnutChart',
    components: { Doughnut },
    data() {
      return {
        chartData: {
            labels: ['Completo','falta'],
            datasets: [ { data: [ 60, 40, ] } ],
        },
        chartOptions: {
          responsive: true
        },
       
        }
      }
    }

  </script>