<template>
  <q-page class="text-white column items-center">
    <MoonlitLogoHeader />

    <h4>Yami</h4>
    <div>Yami is the mascot of Moonlit Works</div>

    <br/><br/>

    <h5>Artworks</h5>
    <div class="row justify-center">
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-alicevu.png" artist-name="@AliceVu134" artist-url="https://twitter.com/AliceVu134" />
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-coburina-toma.png" artist-name="@coburina_toma" artist-url="https://twitter.com/coburina_toma" />
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-arden.png" artist-name="@ardenlolo" artist-url="https://twitter.com/ardenlolo" />
    </div>
    <div class="row justify-center">
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-dango.png" artist-name="@Dango2026" artist-url="https://twitter.com/Dango2026" />
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-karei026.png" artist-name="@Karei026" artist-url="https://twitter.com/Karei026" />
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-likesac.png" artist-name="@Likesac1" artist-url="https://twitter.com/Likesac1" />
    </div>

    <br/><br/>

    <h5>Designs</h5>
    <div class="row justify-center">
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-by-rend.png" artist-name="@Rend_Fa" artist-url="https://twitter.com/Rend_Fa" width="796px" height="383.422px" />
    </div>
    <div class="row justify-center">
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-detail.png" artist-name="@TheEyzi" artist-url="https://twitter.com/TheEyzi" width="396px" height="396px" />
      <YamiArt image-url="https://cdn.moonlit.works/files/yami/yami-design.png" artist-name="@TheEyzi" artist-url="https://twitter.com/TheEyzi" width="396px" height="396px" />
    </div>

    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'
import MoonlitLogoHeader from '../../components/MoonlitLogoHeader.vue'
import YamiArt from '../../components/YamiArt.vue'
import FooterCredits from '../../components/FooterCredits.vue'

useMeta(() => ({
  title: 'Moonlit Works | Yami'
}))


defineComponent({
  name: 'AboutPage',
  components: {
    MoonlitLogoHeader,
    YamiArt,
    FooterCredits,
  },
});
</script>

<style scoped>
</style>
