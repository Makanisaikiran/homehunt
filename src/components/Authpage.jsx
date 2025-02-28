import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import './Authpage.css'; // Import the CSS file for styling

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8rFklLH7w7WGlqb9P_u0VPtwsUqMpfoY",
    authDomain: "homehunt-app.firebaseapp.com",
    projectId: "homehunt-app",
    storageBucket: "homehunt-app.firebasestorage.app",
    messagingSenderId: "151778557306",
    appId: "1:151778557306:web:c228671a530835ae6caac3",
    measurementId: "G-DFKRN1ENXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Google authentication provider

const AuthPage = ({setPage}) => {
  // State variables for login/signup toggle, email, password, error messages, and loading status
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState("Auth")

  // Function to handle form submission for login/signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Successfully signed in! 🎉");
        setTimeout(() => {
          setPage("Landing")
        }, 1000);
      } else {
        // Sign up with email and password
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully! 🚀"); 
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      setError(error.message); // Display error message if authentication fails
    } finally {
      setLoading(false);
    }
  };

  // Function to handle anonymous guest login
  const handleGuestLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      toast.success("Logged in as Guest! 👤");
      await signInAnonymously(auth);
    } catch (error) {
      toast.error(`Guest Login Failed: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google authentication login
  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithPopup(auth, provider); // Opens a popup for Google authentication
      toast.success("Logged in with Google! ✅");
    } catch (error) {
      setError(error.message);
      toast.error(`Google Login Failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      
      <div className="auth-header">
        <h2>{isLogin ? 'Sign in to your account' : 'Create a new account'}</h2>
      </div>

      <div className="auth-form-container">
        <div className="auth-form-box">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

   
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

  
            {error && <div className="error-message">{error}</div>}

  
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? 'Loading...' : isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </form>

  
          <div className="divider">
            <span>Or continue with</span>
          </div>

  
          <button onClick={handleGoogleLogin} disabled={loading} className="guest-button">
            Continue with Google
          </button>

          <button onClick={handleGuestLogin} disabled={loading} className="guest-button">
            Continue as guest
          </button>

          <div className="auth-toggle">
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
