import "./TodoList.css";
import To_Do from "src\component\To_DO.js";
import Input from "src\component\Input.js";
import List from "src\component\List.js";
import Reorder from "src\component\Reorder.js";

/*const mockTodo = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
  },
  {
    id:1,
    isDone: false,
    content: "React 예습하기",
  },
  {
    id:2,
    isDone: false,
    content: "React 복습하기",
  },
];b*/



function TodoList() {
/*const [todo, seTodo] = useState([]); 
b*/
  return (
    <div className="TodoList">
      <To_Do />
      <Input />
      <List />
      <Reorder />
    </div>
  );
}
export default TodoList;