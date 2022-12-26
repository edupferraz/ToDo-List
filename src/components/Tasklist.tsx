import { Task } from "./Task";

import { FiClipboard } from 'react-icons/fi';

import styles from './TaskList.module.css';

export function Tasklist() {

    return(

        <section className={styles.taskList}>

            <header>
                <div>
                    <p>Tarefas criadas</p><span>0</span>
                </div>
                
                <div>
                    <p>Tarefas concluídas</p><span>0</span>
                </div>
            </header>

            <main>
                <FiClipboard size={56} color="#808080"/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>

        </section>
        
    );

}