import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

function AuthenticatedUser() {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard">Dashboard</Link>
          </li>
        </ul>

      </nav>
      <div className='container'>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/Dashboard" element ={<Dashboard />} />
        </Routes>
      </div>
    </>

  );
}

export default AuthenticatedUser;