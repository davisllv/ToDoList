import { PlusCircle } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { ChangeEvent, useState } from 'react'
interface IFormProps {
    handleSubmitValues: (description: string) => void;
}
export const Form = ({
    handleSubmitValues
}: IFormProps) => {
    const [taskDescription, setTaskDescription] = useState('');

    function handleChangeTaskDescription(event: ChangeEvent<HTMLInputElement>){
        setTaskDescription(event.target.value);
    }

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        handleSubmitValues(taskDescription);
        setTaskDescription('');
    }

    return (
        <div className={styles.formBoxes}>
            <form action="submit" onSubmit={handleCreateNewTask}>
              <input type="text" placeholder="Adicione uma nova tarefa" value={taskDescription} onChange={handleChangeTaskDescription}/>
              <button type="submit">Criar <PlusCircle size={20} /></button>
            </form>
        </div>
    )
}