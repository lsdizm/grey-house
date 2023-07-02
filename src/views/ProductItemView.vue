<template>
  <v-container fluid grid-list-md>
    <v-layout      
      full-height>
      <v-table
        fixed-header
        density="compact"
        class="overflow-y-auto"
        style="width:30%;height:100%">
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
          
        </tbody>
      </v-table>
    
    <v-spacer/>      
      <v-card
      style="width:68%"
        loading = "false"
        title="Card title"
        subtitle="Subtitle"
        text="..."
        variant="tonal"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>
<!-- 
    <div class="about">
      <h1>물품관리</h1>
      <v-btn
        @click="onButtonClick">
      </v-btn>
    </div>
  </template> -->
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
    },

    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },{
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },{
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },

  }
</script>
  