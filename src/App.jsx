import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link } from 'react-router-dom';

import GuestUser from './navigation/GuestUser';
import AuthUser from './services/AuthService';
import AuthenticatedUser from './navigation/AuthenticatedUser';


function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <GuestUser/>
  }

  return (
    <AuthenticatedUser/>
  );
}

export default App;