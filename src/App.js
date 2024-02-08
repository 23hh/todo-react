import { useState } from "react";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです",
    "TODOです",
  ]);
  const [completeTodos, setcompleteTodos] = useState([
    "TODOでした",
    "TODOでした",
  ]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplte = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  return (
    <div className="App">
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplte(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={index}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
