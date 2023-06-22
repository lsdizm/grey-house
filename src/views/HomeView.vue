<!-- Home View -->
<template>
    <v-toolbar 
      dark
      prominent
      density="comfortable">      
      <!-- 작아지면 보이게-->
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
    
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false">
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="grey house">
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail">
                </v-btn>
              </template>
            </v-list-item>

            <v-list-item prepend-icon="md:event" title="calenda"/>
          </v-list>

          <v-divider/>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 600px">
          test
        </v-main>
      </v-layout>
    </v-card>
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
