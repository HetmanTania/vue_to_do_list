<template>
  <div class="side-panel">
    <div class="container">
      <div class="content">
        <div class="header">
          <h5>Projects</h5>
          <img  @click="openDialog('add')" class="svg" src="@/icons/plus-gray.svg" alt="" />
        </div>
        <ul class="list-projects">
          <li @click="openTaskCurrentProject(project)" v-for="project in getProjects" :key="project.id" class="list-projects_item">
            <div class="list-projects_item_text">{{ project.name }}</div>
            <div>
              <img @click="openDialog('edit', project)" class="svg" src="@/icons/edit.svg" alt=""/>
              <img @click="openDialog('delete', project)" class="svg" src="@/icons/delete.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <dialog-action-project @doAction="doAction" :props-project="state.currentProject" :action="state.action" @close="dialog.close" v-if="dialog.isOpen.value" ></dialog-action-project>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive,  } from "vue";
import DialogActionProject from "../DialogActionProject/DialogActionProject.vue";
import useDialog from '../../сomposable/useDialog';
import { IProject, TAction } from '../../types/interface';
import { useStore } from "vuex";

interface IState {
  currentProject: IProject;
  action: TAction | '';
}

export default defineComponent({
  setup() {
    const store = useStore();
    const dialog = useDialog();

    const state: IState = reactive({
      currentProject: {
        id: '',
        name: '',
        tasks: []
      },
      action: ''
    });

    const getProjects = computed((): IProject[] | [] => {
      return store.getters['projectsModule/projects'];
    });

    const openDialog = (action: TAction, project?: IProject): void => {
      if(!project) {
          project = {
            id: '',
            name: '',
            tasks: []
        }
      }
      state.currentProject = {...project};
      state.action = action;

      dialog.open();
    }

    const doAction = (project: IProject, action: TAction): void => {
      if(action) {
        if(action === 'add') {
          store.dispatch('projectsModule/addProject', project.name);
        }
        else if(action === 'edit') {
          store.dispatch('projectsModule/editProject', project);
        }
        else if(action === 'delete') {
          store.dispatch('projectsModule/deleteProject', project);
        }
        
      }
    }

    const openTaskCurrentProject = (project: IProject): void =>{
      store.dispatch('setOpenProject', project);
    }

    return {
      state,
      dialog,
      
      getProjects,
      doAction,
      openDialog,
      openTaskCurrentProject
    };
  },
  components: {
    DialogActionProject
  },
});
</script>

<style lang="scss">
@import "../../style/color.scss";
@import "./projectPanel.scss";
</style>