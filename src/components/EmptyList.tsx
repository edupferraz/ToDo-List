
import { FiClipboard } from 'react-icons/fi';

import styles from './EmptyList.module.css';

export function EmptyList() {
    return(
        <section className={styles.emptyList}>            

            <main>
                    <FiClipboard size={56} color="#808080"/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </section>
    );
}