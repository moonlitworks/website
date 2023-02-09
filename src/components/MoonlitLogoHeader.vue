<template>
  <div class="column items-center justify-center">
    <a href="/">
      <q-img
        id="logo"
        class="q-my-lg"
        width="250px"
        src="https://cdn.moonlit.works/logo/horizontal.png"
      ></q-img>
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'MoonlitLogoHeader',
})
</script>

<style lang="scss" scoped>
</style>