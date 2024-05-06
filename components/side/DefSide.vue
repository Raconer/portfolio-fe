<template>
  <v-layout class="vh-100">
      <v-navigation-drawer
          class="def-theme"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"/>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"/>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"/>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
  </v-layout>
</template>
<script lang="ts">
export default {
  props:{
    rail:{
      type: Boolean,
      default:true
    }
  }
}
</script>
<style lang="css">
</style>