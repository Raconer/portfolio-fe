<template>
  <ClientOnly fallback-tag="div" fallback="Loading editor...">
    <QuillEditor :content="receivedProp" contentType="html" theme="snow">
    </QuillEditor>
  </ClientOnly>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {defineComponent} from 'vue'

const data = reactive<Data>({
  message: ''
})

const props = defineProps<{
  receivedProp: string
}>()

// const { test } = await useAsyncData<Data>('myData', async () => {
//   const response = await fetch('https://api.example.com/data')
//   return response.json()
// })

</script>