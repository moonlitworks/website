<template>
  <a :href="link.url" target="_blank">
    <component :is="iconByLabel(link.label)" id="icon" :class="toDark===true ? 'to-dark' : 'to-primary'"></component>
    <q-tooltip anchor="top middle" self="bottom middle">{{capitalize(link.label)}}</q-tooltip>
  </a>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { SnsLinkLabel, SnsLinkType } from './models';
import capitalize from './functions/capitalize';

import DiscordIcon from './sns-icons/DiscordIcon.vue';
import TwitterIcon from './sns-icons/TwitterIcon.vue';
import YoutubeIcon from './sns-icons/YoutubeIcon.vue';
import SteamIcon from './sns-icons/SteamIcon.vue';
import ItchIcon from './sns-icons/ItchIcon.vue';
import GithubIcon from './sns-icons/GithubIcon.vue';
import TwitchIcon from './sns-icons/TwitchIcon.vue';
import SpotifyIcon from './sns-icons/SpotifyIcon.vue';

defineProps<{ link: SnsLinkType, toDark: boolean }>();

function iconByLabel(label: SnsLinkLabel) {
  switch(label) {
    case 'discord': return DiscordIcon;
    case 'twitter': return TwitterIcon;
    case 'youtube': return YoutubeIcon;
    case 'steam': return SteamIcon;
    case 'itch': return ItchIcon;
    case 'github': return GithubIcon;
    case 'twitch': return TwitchIcon;
    case 'spotify': return SpotifyIcon;
  }
}

defineComponent({
  name: 'SnsLink',
  components: {
    DiscordIcon,
    TwitterIcon,
    YoutubeIcon,
    SteamIcon,
    ItchIcon,
    GithubIcon,
    TwitchIcon,
    SpotifyIcon,
  }
});
</script>

<style scoped lang="scss">
#icon {
  height: 20px;
  fill: gray;
  transition: fill .2s;
}

#icon.to-dark:hover {
  fill: $dark;
}

#icon.to-primary:hover {
  fill: $primary;
}
</style>