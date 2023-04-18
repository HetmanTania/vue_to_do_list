interface ITask {
    id: string,
    name: string,
    desc: string,
}

interface IProject {
    id: string,
    name: string,
    tasks: ITask[] | [],
}

interface IEditProject {
    id: string
    editName: string,
}
interface IProjcects {
    pojcects: IProject[] | []
}

type TAction ='add' | 'edit' | 'delete';
interface IActionsMap {
    add: string,
    delete: string,
    edit: string,
}

export {
    ITask,
    IProject,
    IProjcects,
    IEditProject,
    TAction,
    IActionsMap,
}