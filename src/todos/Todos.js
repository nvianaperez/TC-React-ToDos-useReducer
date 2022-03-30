import { useEffect, useReducer } from "react";
import { AfegirToDo } from "./AfegirToDo";
import { replaceTodos, addTodo, updateTodo } from "./actions";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";
import { initialState, reduceTodos } from "./reducers";

export function Todos() {
  const [todos, dispatch] = useReducer(reduceTodos, initialState);

  useEffect(() => {
    loadTodos();

    const intervalID = setInterval(() => loadTodos(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () =>
    getTodos().then((allTodos) => dispatch(replaceTodos(allTodos)));
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (todo) => dispatch(updateTodo(todo));

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
