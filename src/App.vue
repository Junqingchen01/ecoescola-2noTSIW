<template>
  <VApp>
    <Sitebar />
    <VMain style="background: #11999E;"> 
      <RouterView ></RouterView>
    </VMain>
  </VApp>
</template>

<script>
  import Sitebar from"./components/Sitebar.vue";
  import Table from "./components/Table.vue";
  

  export default {
    data() {
      return {
        
      }
    },
    name:"App",

    components:{
      Sitebar,
      Table

    }
  }
</script>

<style lang="scss" scoped>

</style>