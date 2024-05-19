<template>
  <v-layout class="h-100">
      <v-navigation-drawer
          border="white md"
          class="def-theme"
          :rail="isOn"
          permanent
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"/>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"/>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"/>
        </v-list>
      </v-navigation-drawer>
      <v-main ></v-main>
  </v-layout>
</template>
<script lang="ts">
export default {
  props:{
    isOn:{
      type: Boolean,
      default:true
    }
  }
}
</script>