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
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Maion', 'Junho', 'Julho','Agosto' ],
          datasets: [ { data: [40, 20, 12, 21], backgroundColor: '#11999E', } ],
          
        },
        chartOptions: {
          responsive: true
        },
        }
      }
    }

  </script>