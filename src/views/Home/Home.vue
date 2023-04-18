<template>
  <div class="home-container">
    <project-panel></project-panel>
    <!-- <div class="content">
      <project></project>
    </div> -->
  </div>
</template>

<script lang="ts">
import ProjectPanel from '@/components/ProjectPanel/ProjectPanel.vue';
// import Project from '../Project/Project.vue';

export default {
  name: 'Home',
  components: {
    ProjectPanel,
    // Project
  },
};
    
</script>
    

<style lang="scss">
@import './home.scss';
@import '../../style/color.scss';
</style>