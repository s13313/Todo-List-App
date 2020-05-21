/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import AddTodo from './AddTodo';

const heading = css`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
  color: #272727;
  text-align: center !important;
  letter-spacing: 1px;
  h1 {
    font-size: 4em;
  }
  h3 {
    font-size: 2em;
  }
`;
const inputSection = css`
  padding-top: 20px;
  align-items: center;
  height: 10em;
  align-items: center;
  justify-content: center;
  display: grid;
`;
const button = css`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
`;
const buttonleft = css`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  justify-content: left;
  align-items: left;
  margin-right: 10px;
`;
const buttonright = css`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  justify-content: right;
  margin-left: 10em;
`;

const todoList = css`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 1.6em;
  display: flex;
  margin: 10px;
`;

function App() {
  const [todoItems, setTodoItems] = useState([
    { text: 'Your todo comes here', isDone: false },
    { text: 'you can check done/remove and filter', isDone: false },
    { text: 'have fun!!', isDone: false },
  ]);

  const [newItem, setNewItem] = useState('');

  const addTodo = (text) => {
    const newTodos = [...todoItems, { text: text, isDone: false }];

    setTodoItems(newTodos);
  };
  // Delete the task
  const deleteTodo = (index) => {
    const newTodos = [...todoItems];
    newTodos.splice(index, 1);
    setTodoItems(newTodos);
  };
  // Done the task
  const checkTodo = (index) => {
    let newTodos = [...todoItems];
    newTodos[index].isDone = true;
    setTodoItems(newTodos);
  };

  return (
    <div>
      <header css={heading}>
        <h1>Hamed's todos-App</h1>
        <h3>you can add your new task here</h3>
      </header>
      <div css={inputSection}>
        <AddTodo newItem={newItem} setNewItem={setNewItem}></AddTodo>
        <button
          css={button}
          type="submit"
          onClick={() => {
            addTodo(newItem);
            alert('you added a task to your todo list');
            setNewItem('');
          }}
        >
          Submit
        </button>

        <div>
          <div>
            {todoItems.map(function mapping(item, index) {
              return (
                <section
                  value={index}
                  css={css`
                    ${todoList};
                    background-color: ${todoItems[index].isDone ? 'red' : ''};
                  `}
                >
                  <button
                    css={buttonleft}
                    onClick={() => {
                      checkTodo(index);
                      alert('AWESOME JOB!');
                      setNewItem('');
                    }}
                  >
                    Done
                  </button>
                  {console.log(index)}

                  {item.text}
                  <button
                    css={buttonright}
                    onClick={() => {
                      deleteTodo(index);
                      alert('you deleted a task from your todo list');
                      setNewItem('');
                    }}
                  >
                    Delete
                  </button>
                </section>
              );
            })}
          </div>
          <div>filtering comes here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
