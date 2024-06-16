<template>
  <div>
    <v-row>
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
    <v-row>
      <v-col cols="12">
        <quill-editor-cus :received-prop="'Parent Text Test'"/>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>