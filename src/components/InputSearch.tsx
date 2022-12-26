import styles from './InputSearch.module.css';

import { BiPlusCircle } from 'react-icons/bi';

export function InputSearch() {
    return(
        <section className={styles.inputSearch}>
            <div className={styles.inputGroup}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                />

                <button type="submit">Criar <BiPlusCircle size={18}/> </button>
            </div>

        </section>
    );
}