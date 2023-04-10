interface ITask {
    id: string,
    name: string,
    desc: string,
}

interface ITasks {
    idProject: string,
    tasks: ITask[] | []
}

interface IProject {
    id: string,
    name: string,
    tasks: ITasks | []
}

interface IProjcects {
    pojcects: IProject[] | []
}

export {
    ITasks,
    ITask,
    IProject,
    IProjcects,
}