import React from "react";

const Todoitem = props => {
  return (
    <article>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.todo.isComplete}
        onChange={() => props.handleCheckbox(props.todo.id)}
      />
      <label className="todo">{props.todo.todo}</label>
      <button
        className="button"
        onClick={() => props.deleteItem(props.todo.id)}
      >
        &times;
      </button>
    </article>
  );
};

export default Todoitem;
