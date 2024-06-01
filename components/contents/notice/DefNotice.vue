<template>
  <v-card
      v-for="(notice, i) in noticeList"
      :key="i"
      class="pa-0 rounded-0"
      :class="getNoticeListClass(i)"
      color="white"
      max-width="344"
  >
    <v-card-item>
      <v-card-title>
        {{ notice.id }}
      </v-card-title>

      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import type {DefNotice} from "~/types/notice/Notice";


export default defineComponent({
  props: {
    noticeList: {
      type: Array as () => DefNotice[],
      default: () => [], // 함수를 이용하여 빈 배열로 초기화
      required: false
    }
  },
  methods: {
    getNoticeListClass(i: number): void | String {
      let noticeCnt = this.noticeList.length
      if (noticeCnt == 1) {
        return "rounded-lg"
      } else if (i == 0) {
        return "rounded-s-lg"
      } else if (i == noticeCnt - 1) {
        return "rounded-e-lg"
      }
    }
  }
})
</script>