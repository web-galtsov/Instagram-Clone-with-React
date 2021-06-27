import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
      <div className="container sm:flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex sm:w-3/5">
          <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
        </div>
        <div className="flex flex-col sm:w-2/5  sm:m-0 m-4">
          <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
              <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
            </h1>

            {error && <p className="mb-4 text-xs text-red-700">{error}</p>}

            <form onSubmit={handleLogin} method="POST">
              <input
                  aria-label="Enter your email address"
                  type="text"
                  placeholder="Email address"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
              />
              <input
                  aria-label="Enter your password"
                  type="password"
                  placeholder="Password"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
              />
              <button
                  disabled={isInvalid}
                  type="submit"
                  className={`w-full btn-primary transition duration-500 ease-in-out focus:outline-none focus:shadow-outline bg-indigo-700 hover:bg-indigo-900 text-white font-normal py-2 px-4 mr-1 rounded  ${isInvalid && 'bg-opacity-50'}`}
              >
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
            <p className="text-sm">
              Don't have an account?{` `}
              <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
}

//class="btn btn-purple hover:bg-bookmark-white hover:text-black"
// btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded