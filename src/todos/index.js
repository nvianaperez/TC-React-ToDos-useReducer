import { useEffect, useState } from "react";
import { AfegirToDo } from "./AfegirToDo";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();

    const intervalID = setInterval(() => loadTodos(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => getTodos().then(setTodos);
  const onTodoAdded = (todo) => setTodos([...todos, todo]);
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
