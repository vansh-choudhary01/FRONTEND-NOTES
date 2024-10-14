import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [arr, setArr] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setArr(() => {return [...arr, {task : newTodo, id : uuidv4(), isDone : false}]});
        setNewTodo("");
    }

    function updateTodoValue(event) {
        setNewTodo(event.target.value);
    }

    function deleteTodo(id) {
        setArr((prevTodo) => {return prevTodo.filter((todo) => todo.id != id)});
    }

    function DoneAll() {
        setArr((prevTodos) => {
            return prevTodos.map((todo) => {
                return {...todo, isDone : true};
            })
        })
    }

    function DoneOne(id) {
        setArr((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {...todo, isDone : true};
                } else {
                    return todo;
                }
            })
        ))
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Enter your new Task" value={newTodo} onChange={updateTodoValue} />
                <button onClick={addNewTask}>Add New Todo</button>
            </div>
            <hr />
            <div className="todos">
                <h2>Tasks Todo's</h2>
                <hr />
                <ul>
                    {arr.map((el) => { return <li key={el.id}>
                        <span style={el.isDone ? {textDecoration : "line-through"} : {}}>{el.task}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => {deleteTodo(el.id)}}>delete</button>
                        <button onClick={() => {DoneOne(el.id)}}>Mark as Done</button>
                        
                    </li> })}
                </ul>
                <button onClick={DoneAll}>Mark all Done</button>
            </div>
        </>
    )
}

export default Todo;