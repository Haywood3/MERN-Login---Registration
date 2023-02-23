import { Routes, Route } from 'react-router-dom';
import Cookie from './views/Cookie';
import DisplayUser from './views/DisplayUser';
import Login from './views/Cookie';
import Register from './views/DisplayUser';
import UserInfo from './views/Cookie';
import './App.css';

function App() {
  return (
    
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/displayUser" element={<DisplayUser />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
