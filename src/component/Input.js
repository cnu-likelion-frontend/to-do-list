import "./Input.css";

const Input = () => {
    return (
    <div className="Input">
      <div className="Input_Wrapper">
        <input type="checkbox" name="create" />
        <input placeholder="Create a new todo..." />
      </div>
    </div>
    );
  };
  export default Input;