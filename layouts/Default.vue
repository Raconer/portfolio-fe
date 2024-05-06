<template>
  <v-container class="pa-0 h-1" fluid>
    <v-layout class="flex-column">
      <v-row no-gutters >
        <v-card class="w-100 rounded-0" flat>
          <def-header :rail="rail" @onSideBar="onSideBar" />
        </v-card>
      </v-row>
      <v-row no-gutters>
        <v-sheet class="w-100 vh-100 d-flex">
          <v-sheet >
            <def-side :rail/>
          </v-sheet>
          <v-sheet class="w-100 content pa-3" >
            <slot class="def-theme"/>
          </v-sheet>
        </v-sheet>
      </v-row>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  data (){
    return {
      rail:true
    }
  },
  methods:{
    onSideBar(isOn:boolean){
      this.rail = isOn
    }
  }
})
</script>
<style lang="css">
  .content{
    padding: 0 30px;
  }
</style>
