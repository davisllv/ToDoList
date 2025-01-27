import { Trash } from "@phosphor-icons/react";
import styles from './styles.module.css';
import { ITask } from "../../../data/@types/interfaces/ITasks";

interface ITasksProps {
    task: ITask;
}

export const Tasks = ({
    task
}: ITasksProps) => {
    return (
        <div className={styles.task}>
            <label className={styles.customCheckbox}>
                <input type="checkbox" checked={task.completed} className={styles.checkbox}/>
            </label>
            <p>{task.description}</p>
            <button title="Deletar comentário">
                <Trash size={20} />
            </button>
        </div>
    )
}