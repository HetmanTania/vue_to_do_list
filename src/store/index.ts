import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import projectModule, {IProjectState} from './modules/project';
import tasksModule, { ITasksState } from './modules/tasks';
export interface State {
  projectsModule: IProjectState,
  tasksModule: ITasksState
}


export default new Vuex.Store<State>({
  modules: {
    projectsModule: projectModule,
    tasksModule: tasksModule,
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
