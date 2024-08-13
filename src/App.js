import logo from './logo.svg';
import './App.scss';
import Nav from './components/Navigation/Nav';
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='app-container'>
      <Nav />
      <Outlet />
      <ToastContainer style={{ "width": 250, "fontSize": 16 }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" stacked></ToastContainer>
    </div>
  );
}

export default App;
