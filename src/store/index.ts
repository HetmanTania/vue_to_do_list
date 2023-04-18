
// import { generateRandomId } from '@/utils/utils';
// interface IState {
//   projects: IProject[] | [],
//   currentOpenProject: IProject | {}
// }


import { createStore } from 'vuex'
import Vuex from 'vuex'
import { IProject}  from '@/types/interface';
import createPersistedState from "vuex-persistedstate";
import projectModule, {IProjectState} from './modules/project';
export interface State {
  projects: IProjectState,
}


export default new Vuex.Store<State>({
  modules: {
    projects: projectModule
  },
  plugins: [createPersistedState()]

  // state: (): IState => ({
  //   projects: [],
  //   currentOpenProject: {},
  // }),
  // mutations: {
  //   setFirstCurrentOpenProject(state) {
  //     if(state.projects.length) {
  //       state.currentOpenProject = state.projects[0];
  //     }
      
  //     console.log('state.currentOpenProject', state.currentOpenProject);
  //   },
  //   setCurrentOpenProject(state, project: IProject) {
  //     state.currentOpenProject = project;
      
  //   },
  //   addTask(state, tasks: ITask) {
  //     if(tasks && 'tasks' in state.currentOpenProject) {
  //       state.currentOpenProject.tasks = [...state.currentOpenProject.tasks, tasks];
  //     }
  //   }
  // },
  // actions: {
  
  
  //   setCurrentOpenProject(context, project: IProject) {
  //     if(project) {
  //       context.commit('setCurrentOpenProject', project);
  //     }
  //   },
  //   addTask(context, tasks) {
  //     if(tasks) {
  //       const idTask: string = generateRandomId(10);
  //       context.commit('addTask', {...tasks, id: idTask});
  //     }
  //   }
  // },
  // getters: {
  //   currentOpenProject(state): IProject | {} {
  //     return state.currentOpenProject;
  //   }
  // },
  // plugins: [createPersistedState()],
})
