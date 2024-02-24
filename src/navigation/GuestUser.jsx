import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

function GuestUser() {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">Register</Link>
          </li>
        </ul>

      </nav>
      <div className='container'>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/Login" element ={<Login />} />
          <Route path="/Register" element ={<Register />} />
        </Routes>
      </div>
    </>

  );
}

export default GuestUser;