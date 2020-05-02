import React from "react";

function TodosList(props) {
  const {todos} = props;
  if (todos.length === 0) return <div className="m-3">"no Todos..."</div>;
  return (
    <div>
      <div className="m-3">
        <h3>To-do's:</h3>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            <span className="mr-2">{index}.</span> <span>{todo}</span>
            <span className="button-position">
              <button
                onClick={() => props.onDone(todo)}
                className="btn btn-success btn-sm m-2"
              >
                Done
              </button>
              <button
                onClick={() => props.onDelete(index)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
