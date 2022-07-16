<template>
  <q-item v-if="discordLink" class="column items-center justify-center">
    <a :href="discordLink.url" target="_blank">
      <q-item id="cta" class="row items-center justify-center q-py-none q-px-md">
        <DiscordIcon />
        <div class="q-px-sm">Join Our Community</div>
        <q-tooltip anchor="top middle" self="bottom middle">Discord</q-tooltip>
      </q-item>
    </a>
    <q-item class="row q-pt-md">
      <SnsLink v-for="link in otherLinks" :key="link.label" class="q-px-sm" :link="link" :to-dark="false" />
    </q-item>
  </q-item>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { SnsLinkType } from './models';

import DiscordIcon from './sns-icons/DiscordIcon.vue';
import SnsLink from './SnsLink.vue';

let discordLink = ref<SnsLinkType>();
let otherLinks = ref<SnsLinkType[]>([]);

onMounted(async () => {
  api
    .get<SnsLinkType[]>('/links')
    .then(res => res.data)
    .then(links => links.forEach(link => {
      if (link.label === 'discord') {
        discordLink.value = link
      } else {
        otherLinks.value.push(link);
      }
    }));
});

defineComponent({
  name: 'SnsLinks',
  components: {
    DiscordIcon,
    SnsLink,
  }
})
</script>

<style scoped lang="scss">
#cta {
  color: $primary;
  fill: $primary;
  opacity: 0.6;
  font-weight: 900;
  letter-spacing: 2px;
  border-bottom: 2px $primary solid;
  transition: opacity .2s;
}

#cta svg {
  height: 35px;
}

#cta:hover {
  opacity: 1;
}
</style>