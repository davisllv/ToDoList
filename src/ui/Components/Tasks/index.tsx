import { Trash } from "@phosphor-icons/react";
import styles from './styles.module.css';
import { ITask } from "../../../data/@types/interfaces/ITasks";

interface ITasksProps {
    task: ITask;
    handleDeleteTask: (taskId: string) => void;
    handleToggleTask: (taskId: string) => void; 
}

export const Tasks = ({
    task,
    handleDeleteTask,
    handleToggleTask,
}: ITasksProps) => {
    return (
        <div className={styles.task}>
            <label className={styles.customCheckbox}>
                <input type="checkbox" checked={task.completed} className={styles.checkbox} onChange={() => handleToggleTask(task.id)}/>
            </label>
            <p className={task.completed ? styles.checkedText : ""}>{task.description}</p>
            <button title="Deletar comentário" onClick={() => handleDeleteTask(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}