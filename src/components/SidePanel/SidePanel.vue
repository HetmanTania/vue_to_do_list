<template>
  <dialog-add-ptoject @close="closeDialog" v-if="isOpenDialog"></dialog-add-ptoject>
  <div class="side-panel">
    <div class="container">
      <div class="content">
       <div class="header"> 
        <h5>Projects</h5>
        <img @click="openDialogAddPtoject" class="svg" src="@/icons/plus-gray.svg" alt="">
      </div>
        <ul  class="list-projects">
            <li v-for="project in getProjects" :key="project.id" class="list-projects_item">
              <div class="list-projects_item_text"> {{ project.name }} </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import {IProject}  from '@/types/interface';
import DialogAddPtoject from '../DialogAddPtoject/DialogAddPtoject.vue'

export default {
  setup() {
    const store = useStore();
    let isOpenDialog = ref(false);
    function openDialogAddPtoject(): void {
      isOpenDialog.value = true;
    }

    function closeDialog(): void {
      console.log('panel close');
      isOpenDialog.value = false;
    }
    
    const getProjects = computed((): IProject[] | [] => {
     return store.getters.projects;
    });

    return {
      isOpenDialog,


      openDialogAddPtoject,
      closeDialog,
      getProjects,
    }
  },
  components: {
    DialogAddPtoject,
  }
}
</script>

<style lang="scss">
@import '../../style/color.scss';
@import './sidePanel.scss';
</style>