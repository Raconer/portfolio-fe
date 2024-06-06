<template>
  <div>
    <v-row class="pa-3">
      <v-col cols="12" >
        <v-card border="white md">
          <v-card-item>
            <v-card-title>
              History
            </v-card-title>
          </v-card-item>
          <v-card-text class="overflow-auto">
            <def-time-line/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pl-3 pr-3" dense>
      <v-chip-group
      >
        <v-chip
            class="ma-2"
            color="yellow"
            label
        >
          <v-icon icon="mdi-label" start></v-icon>
          사용 기술
        </v-chip>
      </v-chip-group>
    </v-row>
    <v-row class="pa-3" dense>
      <img-card-list/>
    </v-row>
  </div>
</template>

<script setup lang="ts">

</script>