import React from 'react';
import listData from '../data/ListData';

function TaskList() {
  const todos = listData;

  return (
    <div className="task-list my-3">
      <ul className="ps-0">
        {todos.map((listItem) => (
          <li
            className="list-item d-flex justify-content-between mb-3"
            key={listItem.id}
          >
            <p
              className={
                'py-1' +
                (listItem.isCompleted ? ' completed-task' : ' list-item')
              }
            >
              {listItem.text}
            </p>
            <input
              type="checkbox"
              className="checkbox-input"
              checked={listItem.isCompleted ? true : false}
              readOnly
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
