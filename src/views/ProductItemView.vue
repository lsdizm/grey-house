<template>
  <v-container fluid grid-list-md >
    <v-toolbar-title>
      물품목록
      <v-btn icon size="small"
      @click="onSearchClick">
        <v-icon>mdi-database-search-outline</v-icon>
      </v-btn>
    </v-toolbar-title>
    <v-layout      
      full-height
      >
      <v-table
        fixed-header
        density="compact"
        style="width:34%;"
        >
        <thead>
          <tr>
            <th class="text-left" style="width:13%">순번</th>
            <th class="text-left" style="width:20%">코드</th>
            <th class="text-left" >물품명</th>
            <th class="text-center" style="width:15%">재고</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in productItems"
            :key="item.id">
            <td>{{ item.sequence }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
          </tr>
          
        </tbody>
      </v-table>
      <v-spacer/>      
        <v-card
          style="width:65%"
          title="신일티아민염산염정 10mg"
          subtitle="#신일제약 #일반의약품 #창고1"
          text="..."
          variant="tonal">
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
      
    </div>
  </template> -->
  <script>
  //import axios from 'axios'
  export default{
    data() {
      return {
        productItems:[],
      }
    },
    methods:{
      onSearchClick() {
        this.axios
          .get("https://localhost:8090/ProductItem")
          .then((response) =>{
            this.productItems = response.data
            // this.productItems = [{
            //   id : 1,
            //   title:"물품"
            // }] 
          })
          .catch((error) =>{
          })
          .finally(() =>{
          })
      }
    },

    // data () {
    //   return {
    //     desserts: [
    //       {
    //         name: 'Frozen Yogurt',
    //         calories: 159,
    //       },
    //       {
    //         name: 'Ice cream sandwich',
    //         calories: 237,
    //       },
    //       {
    //         name: 'Eclair',
    //         calories: 262,
    //       },
    //       {
    //         name: 'Cupcake',
    //         calories: 305,
    //       },
    //       {
    //         name: 'Gingerbread',
    //         calories: 356,
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //       },{
    //         name: 'Gingerbread',
    //         calories: 356,
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //       },
    //       {
    //         name: 'Eclair',
    //         calories: 262,
    //       },
    //       {
    //         name: 'Cupcake',
    //         calories: 305,
    //       },
    //       {
    //         name: 'Gingerbread',
    //         calories: 356,
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //       },{
    //         name: 'Gingerbread',
    //         calories: 356,
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //       },
    //     ],
    //   }
    // },

  }
</script>
  