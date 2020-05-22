/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, Fragment } from 'react';
import Form from './Form';

/****************CSS Styling***********************/

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
    margin: 0px;
  }
  h3 {
    font-size: 2em;
    margin: 0px;
  }
`;
const inputSection = css`
  padding-top: 20px;
  height: 10em;
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
  background-color: tomato; /* Green */
  color: white;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  justify-items: right;
  margin: 5px;
`;
const buttonDown = css`
  border-radius: 50%;
  background-color: tomato;
  border: none;
  color: white;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

const todoList = css`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  /* position: relative; */
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 1.6em;
  display: flex;
  margin: 10px;
  justify-content: space-between;
`;
const footer = css`
  color: #777;
  height: 20px;
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  width: 500px;
`;
/****************** Main App ********************/
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [checkClick, setCheckClick] = useState('Done');

  // Delete the task

  const deleteTodo = (index) => {
    const newTodos = [...todoItems];
    newTodos.splice(index, 1);

    setTodoItems(newTodos);
  };
  // Done the task
  const checkTodo = (index) => {
    let newTodos = [...todoItems];
    newTodos[index].isDone = !todoItems[index].isDone;
    let newClick = newTodos[index].isDone ? 'Reopen!' : 'Done';
    setTodoItems(newTodos);
    setCheckClick(newClick);
  };
  // add item
  const addTodo = (text) => {
    const newTodos = [...todoItems, { text: text, isDone: false }];
    setTodoItems(newTodos);
  };

  /******************Return ********************/

  return (
    <div>
      <header css={heading}>
        <h1>Hamed's todos-App</h1>
        <h3>you can add your new task here</h3>
      </header>
      <div css={inputSection}>
        <Form
          onSubmit={function onSubmit(newItem) {
            addTodo(newItem);
            alert('Added');
          }}
        ></Form>

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
                    }}
                  >
                    {checkClick}
                  </button>
                  {console.log(index)}

                  {item.text}
                  <button
                    css={buttonright}
                    onClick={() => {
                      deleteTodo(index);
                      alert('Are you sure you want to delete?');
                    }}
                  >
                    Delete
                  </button>
                </section>
              );
            })}
          </div>
        </div>
        <footer>
          <ul css={footer}>
            <div css={buttonDown}>delete all</div>
            <div css={buttonDown}>open</div>
            <div css={buttonDown}>Done</div>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
