<template>
  <div class="home-container">
    <side-panel></side-panel>
    <div class="content">
      <project></project>
    </div>
  </div>
</template>

<script lang="ts">
import SidePanel from '@/components/SidePanel/SidePanel.vue';
import Project from '../Project/Project.vue';

export default {
  name: 'Home',
  components: {
    SidePanel,
    Project
  },
};
    
</script>
    

<style lang="scss">
@import './home.scss';
@import '../../style/color.scss';
</style>