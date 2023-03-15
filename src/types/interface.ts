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

interface IPojcects {
    pojcects: []
}

export {
    ITask,
    IProject,
    IPojcects,
}