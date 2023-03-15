import { createStore } from 'vuex'
import {IProject}  from '../types/interface';
import { generateRandomId } from '@/utils/utils';
interface IState {
  projects: IProject[],
}

export default createStore({
  state: (): IState => ({
    projects: [],
  }),
  mutations: {
    addProject(state, name: string) {
      if(name.length) {
        const id: string = generateRandomId(10);
        state.projects = [...state.projects , {name, id, tasks: [] }];

        console.log(state.projects);
        
      }
      
    }
  },
  actions: {
  },
  getters: {
    projects(state): IProject[] | [] {
      return  state.projects;
    }
  },
  modules: {
  }
})
