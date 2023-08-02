import React from "react";

export const ToDo = ({ todo, onDeleteTodo, onCheckTodo }) => {
  const { id, title, completed } = todo;
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input className="form-check-input me-2" type="checkbox" checked={completed} onChange={()=> onCheckTodo(id)}/>
          {title}
        </div>
        <div className="col">
          <button
            className="btn-close"
            type="button"
            aria-label="Close"
            onClick={() => onDeleteTodo(id)}
          ></button>
        </div>
      </div>
    </li>
  );
};
