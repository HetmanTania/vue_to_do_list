import { createStore } from 'vuex'
import { IProject, ITasks}  from '@/types/interface';
import { generateRandomId } from '@/utils/utils';
interface IState {
  projects: IProject[] | [],
}

function addProjectToLocalStorage(project: IProject) {
  try {
    const projects = returnProjectsFromLocalStorage();
   
    if(projects.length) {
      localStorage.setItem('projects', JSON.stringify([...projects, project]));
    }
    else {
      localStorage.setItem('projects', JSON.stringify([project]));
    }
    console.log("localStore", localStorage.getItem('projects'));
      
  } catch (e) {
      console.log(e);
  }
}

function returnProjectsFromLocalStorage(): IProject[] | [] {
  const projects = localStorage.getItem('projects');
  if(projects?.length) {
    return JSON.parse(projects);
  }
  return [];
}

export default createStore({
  state: (): IState => ({
    projects: [],
  }),
  mutations: {
    addProject(state, project: IProject) {
      state.projects = [...state.projects, project];
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
        addProjectToLocalStorage(project);
       
      }
    },
    setProjects(context) {
     const projects = returnProjectsFromLocalStorage();
     context.commit('setProjects', projects);
    }

  },
  getters: {
    projects(state): IProject[] | [] {
      console.log('get ', state.projects);
      
      return state.projects;
    }
  },
  modules: {
  }
})
