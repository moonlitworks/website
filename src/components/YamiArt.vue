<template>
  <div class="column text-center q-py-sm">
    <a :href="props.imageUrl" target="_blank"><q-img
      id="art"
      :height="height"
      :width="width"
      :src="props.imageUrl"
      fit="cover"
      :style="styleVal"
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
  width: {
    type: String,
    default: '350px',
  },
  height: {
    type: String,
    default: '512px',
  },
  styleVal: {
    type: String,
    default: 'max-width: 800%;',
  }
})

defineComponent({
  name: 'YamiArt',
})
</script>

<style lang="scss" scoped>
#art {
  max-width: 100%;
}
</style>
