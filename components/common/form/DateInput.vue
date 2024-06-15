<template>
  <div>
    <v-date-picker
        position="fixed"
        border="white md"
        max-height="344px"
        :hide-header="hideHeader"
        v-model:model-value="date"
        :class="hide?'cus-date-input-close':'cus-date-input-open'"
        @update:model-value="setValue()"
    />
    <v-text-field
        :label="label"
        prepend-inner-icon="$calendar"
        required
        @click="showDatePicker()"
        :model-value="dateStr"
    />
  </div>
</template>
<script lang="ts">
import moment from "moment";
export default defineComponent({
  props:{
    value:{
      type:Number,
      default:null
    },
    label:{
      type:String,
      default:"날짜"
    },
    dateFormat:{
      type:String,
      default:"yyyy-MM"
    }
  },
  data(){
    let date:Date = new Date()

    return {
      hide: true as Boolean,
      hideHeader: true as Boolean,
      date,
      dateStr: "" as String
    }
  },
  methods:{
    showDatePicker(){
      this.hide = !this.hide
    },
    setValue(){
      this.hide = true
      let year = this.date.getUTCFullYear()
      let month = this.date.getUTCMonth() + 1

      this.dateStr = moment(this.date).format(this.dateFormat)
      this.$emit("update:date", (year * 100) + month)
    }
  }
})
</script>