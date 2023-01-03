import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { EmptyList } from "./EmptyList";
import { Task } from "./Task";

import styles from './TaskList.module.css';

export function Tasklist() {

    
    const [tasks, setTasks] = useState([
        'Arrumar a casa'
    ])

    const [newTask, setNewTask] = useState();

    function handleAddTask() {
        event?.preventDefault();

        setTasks([...tasks, newTask]);

        console.log(tasks);

        setNewTask('');
    }

    function handleNewTextTask(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        setNewTask(event.target.value);
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
    }

    return(

        <div>
            <section className={styles.inputSearch}>
                <div className={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTextTask}
                        value={newTask}
                        required
                    />

                    <button type="submit" onClick={handleAddTask}>Criar <BiPlusCircle size={18}/> </button>
                </div>
            </section>

            <section className={styles.taskList}>

                {
                        tasks.map(task => {
                            return (
                                <Task
                                    key={task}
                                    title={task}
                                    onDeleteTask={deleteTask}
                                />
                            )
                        })
                }

            </section>
        </div>
        
        
    );

}