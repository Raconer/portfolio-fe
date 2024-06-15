<template>
  <v-timeline align="start" direction="horizontal" side="end">
    <v-timeline-item
        v-for="(item, i) in historyList"
        :key="i"
        fill-dot
    >
      <template v-slot:icon>
        <v-avatar>
          <v-img src="http://i.pravatar.cc/64"/>
        </v-avatar>
      </template>
      <v-card
        max-width="300px"
      >
        <v-card-title class="text-h6 bg-white">
          경력 추가하기
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>
            경력 추가...
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
        dot-color="indigo-lighten-2"
        fill-dot
        max-width="300px"
    >
      <template v-slot:icon>
        <v-avatar
            icon="mdi-plus"
            class="plus-history v-icon--clickable" @click="openModal"/>
      </template>

      <v-card>
        <v-card-title class="text-h6 bg-indigo-lighten-2 pr-5">
          추가 하기
        </v-card-title>
        <v-card-text class="bg-white text--primary pa-2">
          <p>클릭하여 경력을 추가해 보세요</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <history-form-modal ref="timeLine"/>
  </v-timeline>
</template>

<script lang="ts">
import type {Info} from "~/types/manage/Portfolio"
export default defineComponent({
  data(){
    return {
      historyList:Array<Info>
    }
  },
  methods:{
    openModal(){
      this.$refs.timeLine.showSwitch()
    }
  }
})
</script>
<style lang="css">
  .plus-history:hover{
    background: white;
    opacity: .9;
  }
</style>
