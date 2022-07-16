<template>
  <div v-if="showProjects && projectList.length > 0" id="projects-section" class="row items-center justify-center">
    <ProjectItem v-for="project in projectList" :key="project.id" :project="project" />
  </div>
</template>

<script setup lang="ts">
import events from './events';
import { defineComponent, onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { ProjectType } from './models';

import ProjectItem from './ProjectItem.vue';

let showProjects = ref(false);
let projectList = ref<ProjectType[]>([])

onMounted(() => {
  api.get<ProjectType[]>('/projects')
    .then(res => res.data)
    .then(projects => projects
      .sort(sortByReleaseDate)
      .map(mapProjectList))
    .then(list => {
      projectList.value = list;
      events.on('logo:click', toggleShowProjects);
    });
});

function toggleShowProjects() {
  showProjects.value = !showProjects.value;
}

function sortByReleaseDate(a: ProjectType, b: ProjectType) {
  return new Date(b.releaseDate ?? -Infinity).getTime() - new Date(a.releaseDate ?? -Infinity).getTime()
}

function mapProjectList(project: ProjectType) {
  let youtubeLink = project.links?.find(l => l.label === 'youtube');
  if (!project.capsule && !!youtubeLink) {
    let match = youtubeLink.url.match(/https:\/\/www.youtube.com\/watch\?v=(?<youtubeId>.*)/i);
    let { youtubeId } = match?.groups as { youtubeId: string };
    if (youtubeId) {
      project.capsule = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
    }
  }
  
  return project;
}

defineComponent({
  name: 'ProjectsSection',
  components: {
    ProjectItem,
  },
})
</script>

<style scoped lang="scss">
#projects-section {
  margin: 50px 0px;
  max-width: 80vw;
}

#minimized-projects-section {
  position: relative;
  cursor: pointer;
  margin: 10px;
  opacity: 0.5;
  font-size: 1.2em;
  letter-spacing: 0.3em;
  transition: opacity .2s;
}

#minimized-projects-section:hover {
  opacity: 1;
}


.upsidedown {
  transform:rotate(180deg); 
  -webkit-transform:rotate(180deg);
  -o-transform:rotate(180deg);
  -ms-transform:rotate(180deg);
}
.upsidedown.caret {
  display: inline-block; 
  position:relative; 
  bottom: 0.15em;
}

@media only screen and (max-width: 600px) {
  #projects-section {
    margin: 50px 0px;
    max-width: 100vw;
  }
}
</style>