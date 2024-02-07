import { useState } from "react";
import "./App.css";

function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです",
    "TODOです",
  ]);
  const [completeTodos, setcompleteTodos] = useState([
    "TODOでした",
    "TODOでした",
  ]);
  return (
    <div className="App">
      <div className="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
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
