import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName));
  };

  const editTask = (oldTaskName, newTaskName) => {
    const newTodos = toDoList.map(task =>
      task.taskName === oldTaskName ? { ...task, taskName: newTaskName } : task
    );
    setToDoList(newTodos);
  };

  console.log(toDoList);

  return (
    <>
      <div className="container">
        <h1>Task React</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
