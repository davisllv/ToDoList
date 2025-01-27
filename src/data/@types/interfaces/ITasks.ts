export interface ITask {
    id: string;
    description: string;
    completed: boolean;
}
export interface ITasks {
    tasks: ITask[];
}