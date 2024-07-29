import logo from './logo.svg';
import './App.scss';
import Nav from './components/Navigation/Nav';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
