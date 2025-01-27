import { PlusCircle } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { ChangeEvent, InvalidEvent, useState } from 'react'
interface IFormProps {
    handleSubmitValues: (description: string) => void;
}
export const Form = ({
    handleSubmitValues
}: IFormProps) => {
    const [taskDescription, setTaskDescription] = useState('');

    function handleChangeTaskDescription(event: ChangeEvent<HTMLInputElement>) {
        setTaskDescription(event.target.value);
        event.target.setCustomValidity("");
    }

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        handleSubmitValues(taskDescription);
        setTaskDescription('');
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }


    return (
        <div className={styles.formBoxes}>
            <form action="submit" onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    required
                    value={taskDescription}
                    onChange={handleChangeTaskDescription}
                    onInvalid={handleNewCommentInvalid} />
                <button type="submit">Criar <PlusCircle size={20} /></button>
            </form>
        </div>
    )
}