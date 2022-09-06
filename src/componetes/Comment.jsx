import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src='https://avatars.githubusercontent.com/u/28899532?v=4'alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                         <div className={styles.authorAndTime}>
                            <strong>Aparecido Assunção</strong>
                            <time title="04 de Setembro as 19:00" dateTime="2022-09-04 08:13:00">Cerca de 1h atrás</time>
                         </div>
                         <button title="deletar Comentário">
                            <Trash size={24}/>
                         </button>
                    </header>
                    <p>Muito Bom MI, parabéns !!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}