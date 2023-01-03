
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

import styles from './Task.module.css';

interface TaskProps {
    title: string;
    onDeleteTask: (task: string) => void;
}

export function Task ({title, onDeleteTask}: TaskProps) {

    const [complete, setComplete] = useState(false);

    function handleCompleteTask(){
        setComplete(!complete);
    }

    function handleDeleteTask() {
        onDeleteTask(title);
    }


    return(
        <section className={styles.task}>
            <ul>
                {
                    complete == false 

                    ? (
                        <li>
                            <div>
                                <input type="checkbox" checked={complete} onChange={handleCompleteTask}/>
                                <p>{title}</p>
                            </div>

                            <button><BsTrash size={18}/></button>

                        </li>
                    )

                    :

                    (
                        <li className={styles.isComplete}>
                            <div>
                                <input type="checkbox" checked={complete} onChange={handleCompleteTask}/>
                                <p>{title}</p>
                            </div>

                            <button onClick={handleDeleteTask}><BsTrash size={18}/></button>

                        </li>
                    )
                }

                
            </ul>
        </section>
    )

}