import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import { useState } from "react";
import Counter from "./components/Counter";
import { useContext } from "react";
import { ConterContext } from "./context/Counter";
function App() {
//  const [todos , setTodos] = useState([]); 
 const counterState =  useContext(ConterContext);
 console.log("context" , counterState)
  
  return (
    <div>
    {/* <CreateTodo />
    <Todos todos={todos} /> */}
    <h1> Count is {counterState.count}</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    </div>
  )
   
}

export default App
