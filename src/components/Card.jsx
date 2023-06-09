import React from 'react';
import CardHeader from './CardHeader';
import TaskList from './TaskList';
import AddTaskButton from './AddTaskButton';

function Card() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="todo-body card px-4">
        <CardHeader />
        <TaskList />
        <AddTaskButton />
      </div>
    </div>
  );
}

export default Card;
