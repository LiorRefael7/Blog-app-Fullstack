import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../style.css'; // import the CSS file

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div>
                <TextField variant="outlined" helperText="User name" size="small"/>
            </div>
            <div>
                <TextField variant="outlined" helperText="Password" size="small"/>
            </div>
            <div>
                <Button variant="contained" size="small">Login</Button>
            </div>
            <div>
                <a href="#">Forgot Username / Password</a>
            </div>
        </div>    
    );
}

export default Login;
