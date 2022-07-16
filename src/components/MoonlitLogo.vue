<template>
  <q-img
    id="logo"
    class="q-my-xl"
    width="250px"
    src="https://cdn.moonlit.works/www/moonlit-logo.png"
    @click.prevent="showProjects"
  ></q-img>
</template>

<script setup lang="ts">
import events from './events';
import { defineComponent } from 'vue';

function showProjects() {
  events.emit('logo:click')
}

defineComponent({
  name: 'MoonlitLogo',
})
</script>

<style lang="scss" scoped>
#logo {
  cursor: pointer;
}
</style>