import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [name, setName] = useState("");

  const userNames: string[] = useSelector((state: string[]) => state);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (name !== "") {
      dispatch({ type: "ADD", name });
      setName("");
    }
  };

  const handleRemoveClick = () => {
    if (name !== "") {
      dispatch({ type: "REMOVE", name });
      setName("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>

      <ul>
        {userNames?.map((name: string, index: number) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
