<template>
  <v-layout class="h-100">
    <v-navigation-drawer
        border="white md"
        location="right"
        :rail="isOn"
        permanent
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" @click="onSideBar"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account" @click="onSideBar"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" @click="onSideBar"></v-list-item>
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