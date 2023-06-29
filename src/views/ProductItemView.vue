<template>
    <div class="about">
      <h1>물품관리</h1>
      <v-btn
        @click="onButtonClick">

      </v-btn>
    </div>
  </template>
  <script>
  //import axios from 'axios'
  export default{
    methods:{
      onButtonClick() {
        this.axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((data) =>{
            console.log(data)
          })
          .catch((error) =>{

          })
          .finally(() =>{
            alert('done');
          })

      }
    }

  }
</script>
  