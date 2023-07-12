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
            :key="item.id"
            @click="onSelectProductItem(item)">
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
          variant="tonal">
          <v-card-title>{{ selectedProductItem.name }}</v-card-title>
          <v-card-subtitle>{{ selectedProductItem.sequence }}</v-card-subtitle>
          <v-card-text>{{ selectedProductItem.standardCode }}</v-card-text>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
    </v-layout>
  </v-container>
</template>
  <script>
  export default{
    data() {
      return {
        productItems:[],
        selectedProductItem:{},
      }
    },
    methods:{
      onSearchClick() {
        // 전역으로 설정 -> Get/Post/Put 함수로 각각 전역 으로 만들것
        this.axios
          .get("https://localhost:8090/query?sqlId=product-item")
          .then((response) =>{
            this.productItems = response.data
          })
          .catch((error) =>{
          })
          .finally(() =>{
          })
      },
      onSelectProductItem(item){
        this.selectedProductItem = item
      }
    },
  }
</script>
  