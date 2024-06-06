<template>
  <v-layout class="h-100">
    <v-navigation-drawer
        border="white md"
        location="right"
        :rail="isOn"
        permanent
        width="500"
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" @click="onSideBar"></v-list-item>
        <v-list-item>
          <v-card>
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
            >
              <v-card-title class="text-white" v-text="'Pre-fab homes'"/>
            </v-img>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main></v-main>
  </v-layout>
</template>
<script lang="ts">
export default defineComponent({
  data(){
    return {
      isOn : true as Boolean
    }
  },
  methods:{
    onSideBar(){
      this.isOn = !this.isOn
    }
  }
})
</script>