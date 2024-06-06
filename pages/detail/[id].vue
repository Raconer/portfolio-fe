<template>
  <div>
    <portfolio-info/>
    <v-row >
      <v-col cols="12">
        <v-card border="white md">
          <card-slider-list/>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-3" border="white md">
          프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용프로젝트 내용
        </v-card>
      </v-col>
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