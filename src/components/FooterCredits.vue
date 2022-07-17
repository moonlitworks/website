<template>
  <q-footer
    id="footer"
    class="column items-center justify-center q-pb-md q-pt-lg">
    <div>Moonlit Works © 2015 - {{currentYear}}</div>
  </q-footer>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const currentYear = ref(new Date().getFullYear())

defineComponent({
  name: 'FooterCredits',
})
</script>

<style scoped lang="scss">
#footer {
  font-size: 0.8em;
  background-color: transparent;
  color: $primary;
  pointer-events: none;
}
</style>
