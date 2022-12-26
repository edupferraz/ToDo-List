import { EmptyList } from "./EmptyList";
import { Task } from "./Task";


import styles from './TaskList.module.css';

export function Tasklist() {

    return(

        <section className={styles.taskList}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            
        </section>
        
    );

}