<template>
  <v-sheet class="w-100 content pa-3">
    <v-row
        class="justify-center"
        align="center"
        no-gutters
    >
      <def-notice :noticeList />
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
            class="mx-auto"
            title="Twitter"
        >
          <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
          </template>

          <v-card-text class="text-h6 py-2">
            Turns out semicolon-less style is easier and safer
            in TS because most gotcha edge cases are type invalid as well.
          </v-card-text>

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-avatar>
              </template>
              <v-list-item-title>Evan You</v-list-item-title>
              <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <card-list v-for="i in 30" :key="i"/>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import type {DefNotice} from "~/types/notice/Notice";
import {defineComponent} from "vue";
const test_noticeList: DefNotice[] = [
  {
    id: 0,
    text: "테스트1"
  }, {
    id: 1,
    text: "테스트2"
  }, {
    id: 2,
    text: "테스트2"
  }
];

export default defineComponent({
  data(){
    return {
      noticeList : test_noticeList
    }
  }
})

// definePageMeta({})
</script>