
import { BsTrash } from 'react-icons/bs';

import styles from './Task.module.css';

export function Task () {

    return(
        <section className={styles.task}>
            <ul>
                <li>
                    <div>
                        <input type="checkbox" />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.  Duis vel sed fames integer</p>
                    </div>

                    <button><BsTrash size={18}/></button>

                </li>
            </ul>
        </section>
    )

}