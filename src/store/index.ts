import { createStore } from 'vuex'
import { IProject, ITasks}  from '@/types/interface';
import { generateRandomId } from '@/utils/utils';
import createPersistedState from "vuex-persistedstate";
interface IState {
  projects: IProject[] | [],
}

export default createStore({
  state: (): IState => ({
    projects: [],
  }),
  mutations: {
    addProject(state, project: IProject) {
      state.projects = [...state.projects, project];
    },
    deleteProject(state, id: string) {
      state.projects = state.projects.filter((el) => {
        return el.id != id;
      });
    },
    editProject(state, {id, projectName}) {
      const editProject: IProject | undefined = state.projects.find((el) => {
        return el.id === id;
      });
      if(editProject && editProject.name) {
        editProject.name = projectName;
      }
    },
    setProjects(state, projects: IProject[]) {
      state.projects = [...projects];
    }
  },
  actions: {
    addProject(context, name: string): void {
      if(name.length) { 
        const idProject: string = generateRandomId(10);
        const tascks: ITasks = {
          idProject: idProject,
          tasks: []
        }

        const project: IProject = {
          name,
          id: idProject,
          tasks: tascks
        }
        context.commit('addProject', project);
  
       
      }
    },
    deleteProject(context, project: IProject) {
      if(project) {
        context.commit('deleteProject', project.id);
      }
    },
    editProject(context, {id, projectName}) {
      if(id && projectName.value.length) {
        context.commit('editProject', {id, projectName})
      }
    },
  },
  getters: {
    projects(state): IProject[] | [] {
      return state.projects;
    }
  },
  plugins: [createPersistedState()],
  modules: {}
})
