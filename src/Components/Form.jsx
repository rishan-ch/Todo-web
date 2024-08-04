export default function Form({setTodo}){
    const afterSubmit = (event) => {
        //prevents reload 
        event.preventDefault();
        const value = event.target.todo.value;
        setTodo((prev) =>[
            ...prev,
            {title:value, id: crypto.randomUUID(), is_completed:false}
        ]);

        //resets the form
        event.target.reset();
    }
    
    return(
        <form onSubmit={afterSubmit}>
            <label htmlFor="todo">
                <input id="todo" type="text" placeholder="Write your next task."></input> 
            </label>
            <button type="submit">Add Task</button>
        </form>
    )
}

