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
          <v-list-item prepend-icon="mdi-home" title="grey house" :to="{name:home}">
            <!-- <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail">
              </v-btn>
            </template> -->
          </v-list-item>

          <v-list-item prepend-icon="md:event" title="calenda" />
        </v-list>

        <v-divider/>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" :to="{name:about}"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({  
});
</script>