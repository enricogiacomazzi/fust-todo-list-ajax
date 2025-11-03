import clsx from "clsx"



export const ListItem = ({todo, completeHandler, deleteHandler}) => {


    return (
        <li className="list-group-item">
            <span className={clsx({'done': todo.done})} >{todo.text}</span>
            <button className="btn btn-primary" onClick={completeHandler}>
                <i className={clsx({
                    'fa': true,
                    'fa-times': todo.done,
                    'fa-check': !todo.done
                })}></i>
            </button>
            <button className="btn btn-danger" onClick={deleteHandler}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
    )
}