<template>
  <q-page class="text-white column items-center center-children">
    <MoonlitLogoHeader />

    <h4>Interactives</h4>
    <div>Games and visual novels</div>
    <ProjectsSection category="interactives" />

    <br/><br/>

    <h4>Lullabies</h4>
    <div>Original songs</div>
    <ProjectsSection category="lullabies" />

    <br/><br/>

    <h4>Storyclips</h4>
    <div>Short dramas</div>
    <ProjectsSection category="storyclips" />

    <br/><br/>

    <h4>Forenotes</h4>
    <div>Pure prose. Usually our prototype story ideas posted on <a href="https://www.honeyfeed.fm/" target="_blank">Honeyfeed</a>.</div>
    <ProjectsSection category="forenotes" />

    <br/><br/>

    <h4>Dawnstains</h4>
    <div>Physical goods. Check out our <a href="https://store.moonlit.works">store</a>!</div>

    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'
import MoonlitLogoHeader from '../components/MoonlitLogoHeader.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import FooterCredits from '../components/FooterCredits.vue'

useMeta(() => ({
  title: 'Moonlit Works | Projects'
}))

defineComponent({
  name: 'AboutPage',
  components: {
    MoonlitLogoHeader,
    ProjectsSection,
    FooterCredits,
  },
});
</script>

<style scoped>
.center-children > * {
  text-align: center;
}
</style>