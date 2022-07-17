<template>
  <div class="column fullscreen text-white text-center q-pa-md flex flex-center">
    <MoonlitLogo />
    <q-item style="font-size: 2em;">
      <span>Nothing to see here</span>
    </q-item>
    <q-btn
      class="q-mt-xl"
      color="$primary"
      text-color="black"
      unelevated
      to="/"
      label="Go Home"
      no-caps
    />
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';

import MoonlitLogo from '../components/MoonlitLogo.vue';

useMeta(() => ({
  title: 'Moonlit Works | Error'
}));

defineComponent({
  name: 'ErrorPage',
  components: {
    MoonlitLogo,
  },
});
</script>
