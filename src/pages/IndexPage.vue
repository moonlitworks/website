<template>
  <q-page class="column items-center justify-center">
    <MoonlitLogo />
    <SnsLinks />
    <NavigationSection />
    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'

import MoonlitLogo from '../components/MoonlitLogo.vue'
import SnsLinks from '../components/SnsLinks.vue';
import NavigationSection from '../components/NavigationSection.vue'
import FooterCredits from '../components/FooterCredits.vue'

const moonlitName = 'Moonlit Works';
const moonlitTagline = 'Powered by angst';
const moonlitDescription = 'Moonlit Works is an independent creator, developer, and publisher of various story-driven multimedia melodrama stories and contents such as novels, games, videos, and music. Powered by angst.';

useMeta(() => ({
  title: 'Moonlit Works | Powered by angst',
  meta: {
    themeColor: { name: 'theme-color', content: '#f7dd89' },
    description: { name: 'description', content: moonlitDescription },
    googleName: { itemprop: 'name', content: moonlitName },
    googleDescription: { itemprop: 'description', content: moonlitDescription },
    googleImage: { itemprop: 'image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
    ogSiteName: { property: 'og:site_name', content: `${ moonlitName } | ${ moonlitTagline }` },
    ogUrl: { property: 'og:url', content: 'https://moonlit.works' },
    ogType: { property: 'og:type', content: 'website' },
    ogTitle: { property: 'og:title', content: moonlitName },
    ogDescription: { property: 'og:description', content: moonlitDescription },
    ogImage: { property: 'og:image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
    twitterCard: { property: 'twitter:card', content: 'summary_large_image' },
    twitterTitle: { property: 'twitter:title', content: moonlitName },
    twitterDescription: { property: 'twitter:description', content: moonlitDescription },
    twitterImage: { property: 'twitter:image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
  },
}));

defineComponent({
  name: 'IndexPage',
  components: {
    MoonlitLogo,
    SnsLinks,
    NavigationSection,
    FooterCredits,
  },
});
</script>
