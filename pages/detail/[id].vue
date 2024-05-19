<template>
  <v-sheet class="w-100 content pa-3 d-grid" >
    <portfolio-info/>
    <v-row class="w-100 pt-3">
      <simple-right-side/>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import PortfolioInfo from "@/components/potfolio/detail/Info.vue";
export default defineComponent({
  components: {PortfolioInfo},
  data (){
    return {

    }
  }
})

// definePageMeta({})
</script>