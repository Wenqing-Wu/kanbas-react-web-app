import JavaScript from "./Javascript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import todos from "./todos.json";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <TodoItem />
      <ConditionalOutput />
      <Classes />
      <Styles />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;