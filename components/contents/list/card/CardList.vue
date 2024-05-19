<template>
  <v-col cols="12" md="4">
    <v-card
        class="mx-auto"
        color="white"
        max-width="400"
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
</template>

<script setup lang="ts">

</script>