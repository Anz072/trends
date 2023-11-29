import './App.css';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route index element={<Login />} />
        <Route  path="/home" element={<Home />} />
    </Routes>
    );
}

export default App;
