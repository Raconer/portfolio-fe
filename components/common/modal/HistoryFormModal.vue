<template>
  <v-dialog
      v-model="isShow"
      max-width="600"
  >
    <v-card
        prepend-icon="mdi-account"
        title="User Profile"
    >
      <v-card-text>
        <v-row dense>
          <v-col
              cols="12"
          >
            <v-text-field
                label="회사 이름"
                required
                v-model="companyForm.name"
            />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col
              cols="12"
          >
            <v-file-input
                label="로고 이미지"
                prepend-icon=""
                prepend-inner-icon="mdi-paperclip"
                v-model="companyForm.logoFile"
            >
            </v-file-input>
          </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="6">
              <date-input
                label="입사일"
                v-model:date="companyForm.hireDate"
              />
            </v-col>
          <v-col cols="6">
            <date-input
                label="퇴사일"
                v-model:date="companyForm.quitDate"
            />
          </v-col>
        </v-row>
        <small class="text-caption text-medium-emphasis"></small>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text="Close"
            variant="plain"
            @click="showSwitch()"
        />
        <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="save()"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">

import type {Form} from "~/types/manage/Company"
import DateInput from "~/components/common/form/DateInput.vue";

export default defineComponent({
  components: {DateInput},
  data(){
    return {
      isShow: false,
      companyForm: {} as Form
    }
  },
  methods:{
    save(){
      this.showSwitch()
    },
    showSwitch(){
      this.companyForm = {} as Form
      this.isShow = !this.isShow
    }
  }
})
</script>