import { Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const users = [
    {
        username: "Admin",
        password: "Admin",
        email: "admin@gmail.com"
    }
]
const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);
    const [isSucess, setIsSuccess] = useState(false);
    const {login} = useContext(UserContext);
    const navigate = useNavigate();
    function saveLoginInfor(infor){
        login(infor);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);
        setIsSuccess(false);

        const validatedUser = users.find((user) => {
            if (user.username === username && user.password === password) {
                return user;
            }
        })
        if (validatedUser){
            setMessage("Login Success");
            setIsSuccess(true);
            saveLoginInfor(validatedUser);
            console.log(validatedUser);
            navigate("/home");
        } else {
            setMessage("Login Failed");
            setIsSuccess(false);
        }
    }
    return (
        <div className="body">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <Form className="login-form" onSubmit={handleSubmit}>  
                <h3>Login Here</h3>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control 
                    className="input" 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter email or phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control 
                    className="input" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" />
                </Form.Group>
                <Button className="login-button" style={{ background: "#0a4e7bff", border: "none"}}  type="submit">
                    Login
                </Button>
                {message && <div style={{fontFamily: "Cursive", color: isSucess ? "green" : "red", marginTop: "20px", fontSize: "20px"}} 
                                className={isSucess ? "success" : "error"}>{message}</div>}
            </Form>
        </div>
    );
}
export default Login;