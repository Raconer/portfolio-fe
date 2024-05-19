<template>
  <v-row align="center" class="pt-2" justify="center" no-gutters>
    <v-col cols="3">
      {{title}}
    </v-col>
    <v-col cols="8">
      <v-text-field
          variant="underlined"
          center-affix
          readonly
          :model-value="value"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  props :{
    title : {
      type: String
    },
    value :{
      type: String
    }
  }
}

</script>