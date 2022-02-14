import { useState } from "react";
import { MyTitle } from "./components/MyTitle";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("working");
  const [todoList, setTodoList] = useState(["Eating", "Sleeping"]);
  const [pokemonImg, setPokemonImg] = useState("");

  const handleInputChange = (e) => setText(e.target.value);
  const handleAddClick = () => {
    // alert("Add!!");
    setTodoList([...todoList, text]);
  };

  const renderTodoList = todoList.map((value) => <li>{value}</li>);

  axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((value) => {
    setPokemonImg(value.data.sprites.front_default);
  });

  return (
    <div className="App">
      <MyTitle title="My Todo List" />

      {/* <img alt="Puppy" src="https://picsum.photos/id/237/200/200" /> */}
      <img alt="Puppy" src={pokemonImg}></img>

      <div>Todo: {text}</div>

      <div className="todo-control">
        <input value={text} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add</button>
      </div>

      <ul>{renderTodoList}</ul>
    </div>
  );
}
