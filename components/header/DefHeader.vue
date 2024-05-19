<template>
    <v-toolbar class="def-theme" density="compact"  >
      <div class="app-bar-nav">
        <v-app-bar-nav-icon  @click="onSideBar" />
      </div>
      <v-toolbar-title>Title {{isOn}}</v-toolbar-title>
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

export default defineComponent ({
  props:{
    isOn:{
      type: Boolean,
      default:true
    }
  },
  methods:{
    onSideBar(){
        this.$emit("onSideBar", !this.isOn)
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