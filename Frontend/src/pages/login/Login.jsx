import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.scss";
import TextField from '@mui/material/TextField';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctUsername = 'vicky';
    const correctPassword = 'Vikram@123';

    if (username === correctUsername && password === correctPassword) {
      navigate('/products');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <Sidebar />
      <div className="field">
        <Navbar />
        <div className="loginform">
          <div className="heading">ADMIN</div>
            <CardContent>
              <div className="username">
                <PersonIcon />
                <TextField 
                  id="outlined-basic" 
                  label="Username" 
                  variant="filled" 
                  fullWidth 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="password">
                <LockOpenIcon />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="error">{error}</div>}
              <div className="btn">
                <Button variant="contained" onClick={handleLogin}>LOGIN</Button>
              </div>
            </CardContent>
        </div>
      </div>
    </div>
  );
}

export default Login;
