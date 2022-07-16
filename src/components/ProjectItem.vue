<template>
  <div id="project">
    <div id="project-description">
      <span id="project-title" :class="project.category">
        {{project.title}}
      </span>
      <span v-if="project.releaseDate" id="project-date">{{project.releaseDate}}</span>
      <div v-if="project.links.length > 0" id="project-links">
        <SnsLink v-for="link in project.links" :key="link.label" :link="link" :to-dark="true" />
      </div>

    </div>
    <div id="project-image">
      <q-img :src="project.capsule" width="100%" height="100%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import  { defineComponent } from 'vue';
import { ProjectType } from './models';

import SnsLink from './SnsLink.vue';

defineProps<{ project: ProjectType }>();

defineComponent({
  name: 'ProjectItem',
  components: {
    SnsLink,
  },
})
</script>

<style scoped lang="scss">
#project {
  position: relative;
  width: 400px;
  height: 229px;
  margin: 15px 15px;
  opacity: 0.5;
  transition: opacity .2s;
}

#project:hover {
  opacity: 1;
}

#project-description,
#project-image {
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
  width: 400px;
  height: 229px;
  transition: transform .2s;
}

#project-description,
#project-description > * {
  z-index: 5;
  background-color: $primary;
  color: $dark;
  padding: 1px 5px;
  font-weight: 500;
}

#project-date {
  font-size: 0.7em;
}

#project-image {
  z-index: 10;
  box-shadow: 0 0 10px $dark;
}

#project:hover > #project-description {
  transform: translateY(-10px);
}

#project:hover > #project-image {
  transform: translateY(15px);
}

#project-title {
  vertical-align: middle;
  display: inline-block;
}

#project-title::after {
  vertical-align: middle;
  font-size: 0.8em;
  padding: 0px 3px;
  margin: 0px 5px;
  color: white;
  display: inline-block;
  border-radius: 0.3em;
}

#project-title.storyclips::after {
  content: 'Storyclips';
  background-color: #e33232;
}

#project-title.interactives::after {
  content: 'Interactives';
  background-color: #3086c0;
}

#project-title.lullabies::after {
  content: 'Lullabies';
  background-color: #159c49;
}

#project-links {
  position: absolute;
  right: 0;
  top: 1px;
}

#project-links > * {
  margin: 3px;
}


@media only screen and (max-width: 600px) {
  #project {
    margin: 15px 15px;
    width: 350px;
    height: 197px;
  }

  #project-description,
  #project-image {
    width: 100%;
    height: 100%;
  }
}
</style>