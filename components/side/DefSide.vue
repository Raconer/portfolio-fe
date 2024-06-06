<template>
  <v-layout class="h-100">
      <v-navigation-drawer
          class="def-theme"
          :rail="isOn"
          permanent
          rail-width="60"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"/>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"/>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"/>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <div class="pa-3">
          <slot name="main"/>
        </div>
      </v-main>
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