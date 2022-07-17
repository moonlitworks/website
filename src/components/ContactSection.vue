<template>
  <q-item class="column items-center justify-center">
    <div id="description">multimedia stories powered by angst</div>
    <div>contact@moonlit.works</div>
  </q-item>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ContactSection',
})
</script>

<style lang="scss" scoped>
#description {
  color: rgb(243, 243, 243);
}
</style>
