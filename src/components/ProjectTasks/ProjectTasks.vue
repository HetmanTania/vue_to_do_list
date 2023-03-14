<template>
    <ul class="project-tasks">
          <project-task></project-task>    
    </ul>
</template>

<script lang="ts">
import ProjectTask from '../ProjectTask/ProjectTask.vue'
export default {
  components: { ProjectTask },

}
</script>

<style lang="scss">
@import './projectTasks.scss';
</style>