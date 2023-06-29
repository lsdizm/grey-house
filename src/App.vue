<template>
  <v-app>
    <v-toolbar 
      dark
      prominent
      density="comfortable">      
      <v-app-bar-nav-icon/>
      <v-toolbar-title>grey house</v-toolbar-title>
      <v-spacer/>      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <!-- <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>       -->    
    </v-toolbar>  
  
    <v-layout>
      <v-navigation-drawer                
        permanent>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-chart-areaspline" title="업무현황" router :to="{name:'dashboard'}" exact/>
        </v-list>
        <v-divider/>        
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-package-variant-closed" title="물품" router :to="{name:'productItem'}" exact/>
          <v-list-item prepend-icon="mdi-file-move" title="입고" router :to="{name:'stockIn'}" exact/>
          <v-list-item prepend-icon="mdi-file-move-outline" title="출고" router :to="{name:'stockOut'}" exact/>
        </v-list>
        <v-divider/>        
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-sigma" title="통계" router :to="{name:'statistic'}" exact/>
          <v-list-item prepend-icon="mdi-factory" title="설정" router :to="{name:'environment'}" exact/>
        </v-list>
        <v-divider/>        
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="정보" router :to="{name:'home'}" exact/>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>
  </v-app>
  
</template>

<script>
import { createApp  } from 'vue';
// Components

export default createApp ({  
  theme:{
    defaultTheme: 'dark'
  }
});
</script>