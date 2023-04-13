import { createStore } from 'vuex'
import { IProject, ITask}  from '@/types/interface';
import { generateRandomId } from '@/utils/utils';
import createPersistedState from "vuex-persistedstate";
interface IState {
  projects: IProject[] | [],
  currentOpenProject: IProject | {}
}

export default createStore({
  state: (): IState => ({
    projects: [],
    currentOpenProject: {},
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
    },
    setFirstCurrentOpenProject(state) {
      if(state.projects.length) {
        state.currentOpenProject = state.projects[0];
      }
      
      console.log('state.currentOpenProject', state.currentOpenProject);
    },
    setCurrentOpenProject(state, project: IProject) {
      state.currentOpenProject = project;
      
    },
    addTask(state, tasks: ITask) {
      if(tasks && 'tasks' in state.currentOpenProject) {
        state.currentOpenProject.tasks = [...state.currentOpenProject.tasks, tasks];
      }
    }
  },
  actions: {
    addProject(context, name: string): void {
      if(name.length) { 
        const idProject: string = generateRandomId(10);

        const project: IProject = {
          name,
          id: idProject,
          tasks: []
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
    setCurrentOpenProject(context, project: IProject) {
      if(project) {
        context.commit('setCurrentOpenProject', project);
      }
    },
    addTask(context, tasks) {
      if(tasks) {
        const idTask: string = generateRandomId(10);
        context.commit('addTask', {...tasks, id: idTask});
      }
    }
  },
  getters: {
    projects(state): IProject[] | [] {
      return state.projects;
    },
    currentOpenProject(state): IProject | {} {
      return state.currentOpenProject;
    }
  },
  plugins: [createPersistedState()],
  modules: {}
})
