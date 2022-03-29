import { useEffect, useState } from "react";
import { AfegirToDo } from "./AfegirToDo";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";

const initialState = [];
function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo]; //equival a [...todos, todo]
    // case "UPDATE_TODO":
    //   return [...state, action.todo]; //equival a [...todos, todo]

    default:
      return state;
  }
}

export function Todos() {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    loadTodos();

    const intervalID = setInterval(() => loadTodos(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => getTodos().then(setTodos);
  const onTodoAdded = (todo) =>
    setTodos(reduceTodos(todos, { type: "ADD_TODO", todo }));
  const onTodoUpdated = (upDatedTodo) =>
    setTodos(
      todos.map((currentTodo) =>
        currentTodo.id === upDatedTodo.id ? upDatedTodo : currentTodo
      )
    );

  return (
    <div className="App">
      <h1>Llistat de ToDo's</h1>
      <button onClick={loadTodos}>Refresh</button>
      <TodoList todos={todos} onUpdated={onTodoUpdated} />
      <AfegirToDo onToDoAdded={onTodoAdded} />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
