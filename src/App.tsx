import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateList from "./pages/CreateList";

import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createlist' element={<CreateList />}/>
        <Route path='/todolist' element={<ToDoList />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
