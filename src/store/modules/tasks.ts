import { ActionContext } from "vuex";
import { IProject, ITask, IAddTask } from "@/types/interface"
import { generateRandomId } from '@/utils/utils';
import { State } from '../index';


type Context = ActionContext<ITasksState, State>;

export interface ITasksState {
    openProject: IProject | {},
}

export default {
    namespace: true,
    state: (): ITasksState => {
       return {
        openProject: {},
       }
    },
    mutations: {
        setOpenProject(state: ITasksState, project: IProject) {
            state.openProject = project;
        },
        addTask(state: ITasksState, task: ITask) {
            console.log('addTask');
        
            if('tasks' in state.openProject) {
                state.openProject.tasks = [...state.openProject.tasks, task]
            }
        },
        resetOpenProject(state: ITasksState) {
            state.openProject = {};
        }
    },
    actions: {
        addTask(context: Context, task: IAddTask): void{
            console.log('ddd');
            if(task && task.name) { 
                const idTask: string = generateRandomId(10);
                context.commit('addTask', {...task, id: idTask});
            }
        },
        setOpenProject(context: Context, project: IProject) {
            if(project) {
                context.commit('setOpenProject', project);
            }
        },
        setOpenProjectFirst(context: Context) {
            if(context.rootState.projectsModule.projects.length) {
                context.commit('setOpenProject', context.rootState.projectsModule.projects[0]);
            }
        },
        resetOpenProject(context: Context) {
            context.commit('resetOpenProject');
        }
    },
    getters: {
        openProject(state: ITasksState): IProject | {} {
            return state.openProject;
        }
    }

}