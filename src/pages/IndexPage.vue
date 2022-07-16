<template>
  <q-page class="column items-center justify-center">
    <MoonlitLogo />
    <SnsLinks />
    <ProjectsSection />
    <ContactSection />
    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';

import MoonlitLogo from '../components/MoonlitLogo.vue';
import SnsLinks from '../components/SnsLinks.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterCredits from '../components/FooterCredits.vue';

const moonlitDescription = 'Moonlit Works is an independent creator of various story-driven melodrama content such as games, videos, and music.';

useMeta(() => ({
  title: 'Moonlit Works | Powered by angst',
  meta: {
    themeColor: { name: 'theme-color', content: '#f7dd89' },
    description: { name: 'description', content: moonlitDescription },
    googleName: { itemprop: 'name', content: 'Moonlit Works' },
    googleDescription: { itemprop: 'description', content: moonlitDescription },
    googleImage: { itemprop: 'image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
    ogSiteName: { property: 'og:site_name', content: 'Moonlit Works | Powered by angs' },
    ogUrl: { property: 'og:url', content: 'https://moonlit.works' },
    ogType: { property: 'og:type', content: 'website' },
    ogTitle: { property: 'og:title', content: 'Moonlit Works' },
    ogDescription: { property: 'og:description', content: moonlitDescription },
    ogImage: { property: 'og:image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
    twitterCard: { property: 'twitter:card', content: 'summary_large_image' },
    twitterTitle: { property: 'twitter:title', content: 'Moonlit Works' },
    twitterDescription: { property: 'twitter:description', content: moonlitDescription },
    twitterImage: { property: 'twitter:image', content: 'https://cdn.moonlit.works/www/yami-meta.png' },
  },
}));

defineComponent({
  name: 'IndexPage',
  components: {
    MoonlitLogo,
    SnsLinks,
    ProjectsSection,
    ContactSection,
    FooterCredits,
  },
});
</script>
