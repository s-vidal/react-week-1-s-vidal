import React from "react";

const DoneTodosList = (props) => {
  const {doneTodos} = props;
  if (doneTodos.length === 0) return null;
  return (
    <div>
      <div className="m-3">
        <h3>Done:</h3>
      </div>
      <ul className="list-group">
        {doneTodos.map((doneTodo, index) => (
          <li key={index} className="list-group-item">
            <span className="mr-2">{index}.</span> <span>{doneTodo}</span>
            <span className="button-position">
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
};

export default DoneTodosList;
