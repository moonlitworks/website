<template>
  <div class="column text-center q-py-sm">
    <a :href="props.imageUrl" target="_blank"><q-img
      id="art"
      height="512px"
      width="350px"
      :src="props.imageUrl"
    ></q-img></a>
    <a :href="props.artistUrl" target="_blank">{{ props.artistName }}</a>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

let props = defineProps({
  imageUrl: {
    type: String,
    default: undefined,
  },
  artistName: {
    type: String,
    default: undefined,
  },
  artistUrl: {
    type: String,
    default: undefined,
  },
})

defineComponent({
  name: 'YamiArt',
})
</script>

<style lang="scss" scoped>
</style>