<!-- Home View -->
<template>
  <div>     
    <v-toolbar 
      dark
      prominent
      density="comfortable">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>      
    </v-toolbar>
  </div>  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import AboutView from '../views/AboutView.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    AboutView,
  },
});
</script>
