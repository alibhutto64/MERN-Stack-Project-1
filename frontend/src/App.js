import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link to="/expenses">Expenses</Link> */}
      <Outlet />
    </div>
  );
}

export default App;
