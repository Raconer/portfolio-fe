<template>
  <v-col
      v-for="(variant, i) in variants"
      :key="i"
      cols="12"
      md="4"
  >
    <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-img
          class="align-end text-white"
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
      >
        <v-card-title>포트폴리오 이름</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">
        회사 이름 <br>
        <v-chip
            color="pink"
            class="ma-2"
            label
        >
          사용 기술
        </v-chip>
      </v-card-subtitle>

      <v-card-text>
        간단한 설명
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text="Share"></v-btn>

        <v-btn color="orange" text="Explore"></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      variants: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
    }
  }
})

</script>