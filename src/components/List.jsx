import { ListItem } from "./ListItem"


export const List = ({todos, completeHandler, deleteHandler}) => {

    return (
        <ul className="list-group m-2">
            {todos.map(t => <ListItem 
                                key={t.id} 
                                todo={t} 
                                completeHandler={() => completeHandler(t)} 
                                deleteHandler={() => deleteHandler(t)} 
                            />
            )}
        </ul>
    )
}