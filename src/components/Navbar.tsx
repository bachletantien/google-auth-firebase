// interface NavbarProps {}

import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div>
      <h1>Firebase Google Auth and Context</h1>
      {!user ? (
        <Link to='/signin'>Sign in</Link>
      ) : (
        <button onClick={handleLogOut}>Sign out</button>
      )}
    </div>
  );
};

export default Navbar;
