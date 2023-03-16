<template>
 
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
              <img @click="deleteProject" class="svg" src="@/icons/delete.svg" alt="">
            </li>
            <dialog-add-project @close="closeDialog" v-if="isOpenAddDialog"></dialog-add-project>
            <!-- <delete-project  v-if="isOpenDellDialog" title="Delete project?"
            :desc="() => {return `Уверены, что хотите удалить ${project.name}?`}" ></delete-project> -->
            <!-- <dialoge-delet v-if="isOpenDellDialog" title="Delete project?" 
            :desc="() => {return `Уверены, что хотите удалить?`}" ></dialoge-delete> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import {IProject}  from '@/types/interface';
import DialogAddProject from '../DialogAddProject/DialogAddProject.vue'
// import DialogeDelete from '../DialogDelite/DialogeDelete.vue';


export default {
  setup() {
    const store = useStore();
    let isOpenAddDialog = ref(false);
    let isOpenDellDialog = ref(false);
    onMounted(() => {
      store.dispatch('setProjects');
    })

    function openDialogAddPtoject(): void {
      isOpenAddDialog.value = true;
    }

    function deleteProject(): void {
      console.log();
      
    }

    function closeDialog(): void {
      console.log('panel close');
      isOpenAddDialog.value = false;
    }
    
    const getProjects = computed((): IProject[] | [] => {
     return store.getters.projects;
    });

    return {
      isOpenAddDialog,
      isOpenDellDialog,

      openDialogAddPtoject,
      deleteProject,
      closeDialog,
      getProjects,
    }
  },
  components: {
    DialogAddProject,
    // DialogeDelete,
  }
}
</script>

<style lang="scss">
@import '../../style/color.scss';
@import './sidePanel.scss';
</style>