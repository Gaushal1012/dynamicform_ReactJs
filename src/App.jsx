import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { DynamicForm } from "./components/DynamicForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<DynamicForm/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
