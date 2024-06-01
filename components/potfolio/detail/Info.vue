<template>
  <v-row class="w-100 ma-0" >
    <v-col cols="12" md="6">
      <info-card-layout>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
      </info-card-layout>
    </v-col>
    <v-col cols="12" md="6">
      <info-card-layout>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
        <text-field title="정보" value="테스트"/>
      </info-card-layout>
    </v-col>
  </v-row>
</template>
<script lang="ts">

import InfoCardLayout from "~/components/common/layout/InfoCardLayout.vue";

export default defineComponent({
  name: "PortfolioInfo",
  components: {InfoCardLayout},
  data(){
    return {

    }
  },
})
</script>
