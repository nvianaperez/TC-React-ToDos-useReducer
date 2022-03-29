import { postUpdateTodo } from "./todosAPI";

export function TodoItem({ todo, onUpdated }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => {
        postUpdateTodo(todo).then((json) => onUpdated(json));
      }}
    >
      {todo.title}
    </li>
  );
}
