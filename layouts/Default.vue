<template>
  <v-container class="pa-0" fluid>
    <v-layout class="flex-column">
      <v-row no-gutters >
        <v-card class="w-100 rounded-0" flat>
          <def-header v-model:isOn="isOn" @onSideBar="onSideBar" />
        </v-card>
      </v-row>
      <v-row no-gutters class="vh-100" >
        <div class="w-100 d-flex">
          <def-side :is-on="isOn">
            <slot/>
          </def-side>
        </div>
      </v-row>
    </v-layout>
  </v-container>
</template>
<script lang="ts">

export default defineComponent({
  data (){
    let isOn:Boolean = true

    return {
      isOn
    }
  },
  methods:{
    onSideBar(isOn:boolean){
      this.isOn = isOn
    }
  }
})
</script>
<style lang="css">
  .content{
    padding: 0 30px;
  }
</style>
