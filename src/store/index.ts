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
      
  } catch (e) {
      console.log(e);
  }
}

function setProjectInLocalStorage(projects: IProject[]): void {
  try {
    localStorage.setItem('projects', JSON.stringify([...projects]));
  } catch(e) {
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
      addProjectToLocalStorage(project);
    },
    deleteProject(state, id: string) {
      state.projects = state.projects.filter((el) => {
        return el.id != id;
      });
      setProjectInLocalStorage([...state.projects]);
    },
    editProject(state, {id, projectName}) {
      const editProject: IProject | undefined = state.projects.find((el) => {
        return el.id === id;
      });
      if(editProject && editProject.name) {
        editProject.name = projectName;
      }

      setProjectInLocalStorage([...state.projects])
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
    setProjects(context) {
     const projects = returnProjectsFromLocalStorage();
     context.commit('setProjects', projects);
    },

  },
  getters: {
    projects(state): IProject[] | [] {
      return state.projects;
    }
  },
  modules: {
  }
})
