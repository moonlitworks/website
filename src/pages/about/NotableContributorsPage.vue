<template>
  <q-page class="text-white column items-center">
    <MoonlitLogoHeader />

    <div id="content" class="text-white column items-center center-children">
      <h4>Notable Contributors</h4>
      <div>
        This page serves as a shoutout and recognition to the wonderful people who have been part
        of the Moonlit team across and beyond individual projects. Their contributions, big or
        small, past or present, tangible or not, are valuable to us.
      </div>
      <br/>
      <div>
        These people play a big part in Moonlit's history and we will always be grateful for
        being able to work with them!
      </div>
    </div>

    <div class="column">
      <ContributorCard v-for="contributor in contributors" :key="contributor.name" :contributor="contributor" />
    </div>

    <FooterCredits />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import MoonlitLogoHeader from '../../components/MoonlitLogoHeader.vue'
import ContributorCard from '../../components/ContributorCard.vue'
import FooterCredits from '../../components/FooterCredits.vue'
import { Contributor } from '../../components/models'

let contributors = ref<Contributor[]>([])

onMounted(() => {
  api.get<Contributor[]>('/contributors')
    .then(res => res.data)
    .then(contributors => contributors.sort(sortAlphabetically))
    .then(list => {
      contributors.value = list;
    });
});

useMeta(() => ({
  title: 'Moonlit Works | Notable Contributors'
}))

function sortAlphabetically(a: Contributor, b: Contributor) {
  return a.name > b.name ? 1 : -1
}

defineComponent({
  name: 'AboutPage',
  components: {
    MoonlitLogoHeader,
    ContributorCard,
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

.contributor-image {
  max-width: 128px;
  border-radius: 50%;
}
</style>
