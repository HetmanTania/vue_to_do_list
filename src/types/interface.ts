interface ITask {
    id: string,
    name: string,
    desc: string,
}



interface IProject {
    id: string,
    name: string,
    tasks: ITask[] | []
}

interface IProjcects {
    pojcects: IProject[] | []
}

export {
    ITask,
    IProject,
    IProjcects,
}