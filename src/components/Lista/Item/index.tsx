import style from '../Lista.module.scss';

export default function Item({ tarefa }: {tarefa: string}) {
    
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
        </li>
    )
}