import "./App.css";
import data from "../public/data.json";
import DynamicForm from "./components/DynamicForm";


function App() {
  return (
    <>
      <DynamicForm data = {data} />
    </>
  );
}

export default App;
