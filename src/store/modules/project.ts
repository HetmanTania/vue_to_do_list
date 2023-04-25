import { IProject, IEditProject } from '@/types/interface';
import { generateRandomId } from '@/utils/utils';
import { ActionContext } from "vuex";
import { State } from '../index';

export interface IProjectState {
    projects: IProject[] | [],
}

type Context = ActionContext<IProjectState, State>;

export default {
    namespaced: true,
    state: (): IProjectState => ({
        projects: [],
    }),
    mutations: {
        addProject(state: IProjectState, project: IProject): void {
            state.projects = [...state.projects, project];
        },
        deleteProject(state: IProjectState, id: string): void {
            state.projects = state.projects.filter((el) => {
                return el.id != id;
            });
        },
        editProject(state: IProjectState, project: IProject): void {
            console.log('editProject');
            
            state.projects = [...state.projects].map((el: IProject): IProject => {
                if (el.id === project.id) {
                    el.name = project.name;
                }
                return el;
            });
        },
    },
    actions: {
        addProject(context: Context, name: string): void {
            if (name.length) {
                const idProject: string = generateRandomId(10);
                const project: IProject = {
                    name,
                    id: idProject,
                    tasks: []
                }
                context.commit('addProject', project);
            }
        },
        editProject(context: Context, project: IProject) {
            if(project && project.name.length) {
                context.commit('editProject', project);
            }
        },
        deleteProject(context: Context, project: IProject) {
            if(project) {
                context.commit('deleteProject', project.id);
                if(!context.rootState.projectsModule.projects.length) {
                    context.commit('resetOpenProject', null, { root: true });
                }
            }
        },
    },
    getters: {
        projects(state: IProjectState): IProject[] | [] {
            return state.projects;
        }
    }
}