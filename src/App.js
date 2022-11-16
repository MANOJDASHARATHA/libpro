// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminPortal from './components/adminPortal';
import SideBar from './components/sidebar';


function App() {
  let email="admin@gmail.com"
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin-login" element={<AdminLogin data={email}/>}/>
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/admin-portal/*" element={<AdminPortal data={email}/>}/>
      <Route path="/sidebar" element={<SideBar data={email}/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
