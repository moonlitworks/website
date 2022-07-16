<template>
  <div v-if="projectList.length > 0" id="projects-section" class="row items-center justify-center">
    <ProjectItem v-for="project in projectList" :key="project.id" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { ProjectType } from './models';

import ProjectItem from './ProjectItem.vue';

let projectList = ref<ProjectType[]>([])

onMounted(() => {
  api.get<ProjectType[]>('/projects')
    .then(res => res.data)
    .then(projects => projects
      .sort(sortByReleaseDate)
      .map(mapProjectList))
    .then(list => {
      projectList.value = list;
    });
});

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
</style>