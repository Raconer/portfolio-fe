<template>
  <v-timeline align="start" direction="horizontal" side="end">
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <v-card
        :class="setLastCard(i)"
      >
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus.
            Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
            Est et nobis iisque percipit, an vim zril disputando voluptatibus,
            vix an salutandi sententiae.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
export default defineComponent({
  data(){
    return {
      items: [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
        },
      ],
    }
  },
  methods:{
    setLastCard(i:number):void|String{
      if(i == this.items.length - 1){
        return "pr-5"
      }
    }
  }
})
</script>