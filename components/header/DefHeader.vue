<template>
    <v-toolbar class="def-theme" density="compact"  >
      <div class="app-bar-nav">
        <v-app-bar-nav-icon  @click="onSideBar" />
      </div>
      <v-toolbar-title>Title {{rail}}</v-toolbar-title>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent ({
  props:{
    rail:{
      type: Boolean,
      default:true
    }
  },
  methods:{
    onSideBar(){
        this.$emit("onSideBar", !this.rail)
    }
  }
})
</script>
<style lang="css" >
  /* 2. DefHeader */
  .app-bar-nav{
    width: 56px;
    text-align: center;
  }
</style>