// interface SignInProps {}

import GoogleButton from 'react-google-button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const { user, googleSignIn } = useAuth();
  const handleSignIn = async () => {
    await googleSignIn();
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/account');
    }
  }, [user]);
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        {user ? (
          <div>{user.displayName}</div>
        ) : (
          <GoogleButton onClick={handleSignIn} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
