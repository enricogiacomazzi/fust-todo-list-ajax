import { useForm } from "react-hook-form"

export const AddTodo = ({addTodo}) => {
    const {register, handleSubmit, reset} = useForm();

    const sbmt = (data) => {
        addTodo(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(sbmt)}>
            <div className="m-3">
                <input type="text" className="form-control" {...register('text', {required: true})} />
            </div>
            <div className="m-3">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}