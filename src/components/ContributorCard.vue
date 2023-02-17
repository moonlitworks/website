<template>
  <div class="contributor row items-center q-ma-lg">
    <div class="column col-12 col-md-3 items-center items-md-end">
      <img v-if="props.contributor.image" class="contributor-image q-mx-lg" :src="props.contributor.image" />
    </div>
    <div class="column col-12 col-md-9 items-center items-md-start">
      <h6>{{ props.contributor.name }}</h6>
      <div><SnsLink v-for="link in props.contributor.links" :key="link.url" class="q-mx-xs" :link="link" :to-dark="false" /></div>
      <div class="contribution">{{ props.contributor.contribution }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import SnsLink from './SnsLink.vue'
import { Contributor } from './models';

let props = defineProps({
  contributor: {
    type: Object as PropType<Contributor>,
    required: true,
  },
});


defineComponent({
  name: 'ContributionCard',
  components: {
    SnsLink,
  }
})
</script>

<style scoped lang="scss">
.contributor {
  max-width: 800px;
}

.contributor-image {
  max-width: 128px;
  border-radius: 50%;
}

.contribution {
  color: white;
}
</style>
