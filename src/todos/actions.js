export const REPLACE_TODOS = "REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos };
}
export const ADD_TODO = "ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(upDatedTodo) {
  return { type: UPDATE_TODO, todo: upDatedTodo };
}
