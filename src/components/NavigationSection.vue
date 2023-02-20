<template>
  <q-item class="column items-center justify-center">
    <div id="description" class="column items-center justify-center">
      <div>Emotions After Dark</div>
    </div>
    <div class="row q-pt-lg items-center justify-center">
      <a href="/projects"><div class="interlink q-px-sm q-mx-sm">PROJECTS</div></a>
      <!-- <a href="https://store.moonlit.works"><div class="interlink q-px-sm q-mx-sm">STORE</div></a> -->
      <a href="/about"><div class="interlink q-px-sm q-mx-sm">ABOUT</div></a>
    </div>
  </q-item>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'NavigationSection',
})
</script>

<style lang="scss" scoped>
#description > * {
  color: rgb(243, 243, 243);
}

.interlink {
  cursor: pointer;
  color: $primary;
  fill: $primary;
  font-size: 0.9em;
  opacity: 0.6;
  letter-spacing: 2px;
  transition: opacity .2s;
}

.interlink:hover {
  opacity: 1;
}
</style>
