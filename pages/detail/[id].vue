<template>
  <div>
    <portfolio-info/>
    <v-row class="w-100 ma-0" >
      <v-sheet class="w-100 pa-3 d-grid" border="white md" >
        <card-slider-list/>
      </v-sheet>
    </v-row>
    <v-row class="w-100 pt-3 ma-0">
      <v-sheet class="w-100 pa-3" border="white md">
        프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용
      </v-sheet>
    </v-row>
  </div>
</template>

<script lang="ts">
import PortfolioInfo from "@/components/potfolio/detail/Info.vue";

export default defineComponent({
  components: {PortfolioInfo},
  data() {
    return {
      model:null
    }
  }
})

// definePageMeta({})
</script>