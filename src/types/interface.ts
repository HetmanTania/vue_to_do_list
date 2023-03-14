interface ITask {
    id: number,
    name: string,
    desc: string,
}

interface IProject {
    id: number,
    name: string,
    tasks: ITask[]
}

interface IPojcects {
    id: number,
    pojcects: IPojcects[]
}

export {
    ITask,
    IProject,
    IPojcects,
}