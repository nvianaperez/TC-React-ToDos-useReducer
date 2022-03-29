import { useRef } from "react";
import { postNewTodo } from "./todosAPI";

export function AfegirToDo({ onToDoAdded }) {
  const titleRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        console.log(title);
        titleRef.current.value = "";
        postNewTodo(title).then((json) => onToDoAdded(json));
      }}
    >
      <input ref={titleRef} />
      <input type="submit" value="Afegir ToDo" />
    </form>
  );
}
