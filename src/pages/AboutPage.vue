<template>
  <q-page class="column items-center">
    <MoonlitLogoHeader />

    <div id="content" class="text-white column items-center center-children">

      <h4>About Us</h4>
      <div>Moonlit Works is an independent creator of anime-styled multimedia melodrama.</div>
      <div>Our goal is to create a huge collection of story-driven works in all kinds of media.</div>
      <div>Reach us through email at <a href="mailto:contact@moonlit.works" target="_blank">contact@moonlit.works</a></div>

      <br/><br/>

      <h4>Branding</h4>
      <img src="https://cdn.moonlit.works/logo/full.png" width="200" />
      <div>Our logo was designed by the amazing <a href="https://twitter.com/Sasquatchiix" target="_blank">Sasquatchii</a>!</div>
      <div>We use black (#131313) and gold (#F7DD89) as our color theme.</div>
      <div><a href="/yami">Yami</a> is the name of our mascot.</div>

      <br/><br/>

      <h4>Collaboration</h4>
      <div>Check out the list of our amazing <a href="/notable-contributors">Notable Contributors</a>!</div>
      <div>We are always on the lookout for talented individuals and interesting creative ventures.</div>
      <div>If you are interested in joining our projects, don't hesitate to contact us!</div>

      <br/><br/>

      <h4>FAQ</h4>

      <br/>

      <div>
        <q>Can I...</q>
        <br/>
        Yes.
      </div>
    </div>


    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'
import MoonlitLogoHeader from '../components/MoonlitLogoHeader.vue'
import FooterCredits from '../components/FooterCredits.vue'

useMeta(() => ({
  title: 'Moonlit Works | About'
}))

defineComponent({
  name: 'AboutPage',
  components: {
    MoonlitLogoHeader,
    FooterCredits,
  },
});
</script>

<style scoped>
#content {
  max-width: 800px;
  width: 100%;
  padding: 23px;
}

.center-children > * {
  text-align: center;
}
</style>
