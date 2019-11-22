import React from "react";

const AddTodo = props => {
  return (
    <section>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.isCompleteNewTodo}
        onChange={props.handleNewTodoCheckbox}
      />
      <input type="text" className="todo" onChange={props.handleNewTodo} />
      <button type="submit" onClick={props.handleSubmit}>
        Add
      </button>
    </section>
  );
};

export default AddTodo;
