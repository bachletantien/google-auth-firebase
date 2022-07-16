import Navbar from 'components/Navbar';
import ProtectedRoute from 'components/ProtectedRoute';
import Account from 'pages/Account';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route
          path='/account'
          element={<ProtectedRoute children={<Account />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
