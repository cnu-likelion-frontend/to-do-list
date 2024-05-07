import "./TodoList.css";
import To_Do from "./component/To_DO.js";
import Input from "./component/Input.js";
import List from "./component/List.js";
import Reorder from "./component/Reorder.js";
import todoCover from "./images/bg-desktop-light.jpg";



function TodoList() {

  return (
    <>
      <div className="cover">
        <img src={todoCover} alt="cover" />
      </div>
      <div className="TodoList">
        <To_Do />
        <Input />
        <List />
        <Reorder />
      </div>
    </>
  );
}
export default TodoList;
