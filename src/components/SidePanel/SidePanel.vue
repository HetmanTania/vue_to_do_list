<template>
  <div class="side-panel">
    <div class="container">
      <div class="content">
        <div class="header">
          <h5>Projects</h5>
          <img  @click="addDialog.open" class="svg" src="@/icons/plus-gray.svg" alt="" />
        </div>
        <ul class="list-projects">
          <li v-for="project in getProjects" :key="project.id" class="list-projects_item">
            <div class="list-projects_item_text">{{ project.name }}</div>
            <div>
              <img @click="openEditDialog(project)" class="svg" src="@/icons/edit.svg" alt=""/>
              <img @click="openDeleteDialog(project)" class="svg" src="@/icons/delete.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <dialog-edit-project @editProject="editProject" :project="state.currentProject" v-if="editDialog.isOpen.value" @close="editDialog.close" ></dialog-edit-project>
    <dialog-add-project v-if="addDialog.isOpen.value" @close="addDialog.close"></dialog-add-project>
    <dialoge-delete @deleteElement="deleteProject" :desc="getDescDeleteDialog()" title="Delete project?" v-if="delleteDialog.isOpen.value" @close="delleteDialog.close"></dialoge-delete>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, reactive } from "vue";
import DialogAddProject from '../DialogAddProject/DialogAddProject.vue'
import DialogEditProject from "../DialogEditProject/DialogEditProject.vue";
import DialogeDelete from "../DialogDelite/DialogeDelete.vue";
import { useStore } from "vuex";
import { IProject } from "@/types/interface";
import useDialog from '@/сomposable/useDialog';

interface IState {
  currentProject: IProject;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const editDialog = useDialog();
    const addDialog = useDialog();
    const delleteDialog = useDialog();

    const state: IState = reactive({
      currentProject: { name: '', id: '', tasks: []},
    });

    const getProjects = computed((): IProject[] | [] => {
      return store.getters.projects;
    });

    const openEditDialog = (project: IProject): void => {
      state.currentProject = project;
      editDialog.open();
    };

    const openDeleteDialog = (project: IProject): void => {
      state.currentProject = project;
      delleteDialog.open();
    }

    function getDescDeleteDialog(): string {
      if('name' in state.currentProject) {
        return `Are you sure you want to delete the project ${state.currentProject.name}?`;
      }
      return '';
    }

    function deleteProject() {
       if(state.currentProject) {
          store.dispatch('deleteProject', state.currentProject);
        }
    }

    const editProject = (projectName: string):void => {
      if(state.currentProject || projectName.length) {
        store.dispatch('editProject', {id: state.currentProject.id, projectName});
      }
    }

    return {
      state,

      getProjects,
      addDialog,
      editDialog,
      delleteDialog,
      openEditDialog,
      openDeleteDialog,
      getDescDeleteDialog,
      deleteProject,
      editProject
    };
  },
  components: {
    DialogEditProject,
    DialogAddProject,
    DialogeDelete
  },
});
</script>

<style lang="scss">
@import "../../style/color.scss";
@import "./sidePanel.scss";
</style>