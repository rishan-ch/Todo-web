
function Task({item, setTodo}){
    const taskCompleted = () =>{
        setTodo((previous) =>
            previous.map((todo) =>
            todo.id == item.id?
            {...todo,is_completed :!todo.is_completed}
            :todo
            )
        );
    }

    const taskDelete =()=>{
        setTodo((prev) => 
            prev.filter((todo) => 
                todo.id != item.id)
        );
    };

    return(
        //?. will check if the item is null or undefined
        <li id={item?.id}>
            <div>
            <button onClick={taskCompleted}>(Done) </button>
            {/* checks if item is null or undefined. */}
            <span style={item.is_completed ? {textDecoration:"line-through"}:{}}>{item?.title}</span>
                <button>Edit</button>
                <button onClick={taskDelete}>Delete</button>
            </div>

        </li>
    );
}


export default function TaskList({tasks, setTodo}){
    return <ol className="list">
        {tasks && tasks?.length > 0 ? (
            tasks?.map((item, index) => <Task key={index} item={item} setTodo={setTodo}/>)
        ) : (
            <p>Seems empty</p>
        )}
    </ol>;
}