<template>
  <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
  >
    <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle }"
    >
      <v-card
          :color="isSelected ? 'primary' : 'grey-lighten-1'"
          class="ma-4"
          height="100"
          width="150"
          @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
            ></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
<script  lang="ts">
export default {
  data: () => ({
    model: null,
  }),
}
</script>
