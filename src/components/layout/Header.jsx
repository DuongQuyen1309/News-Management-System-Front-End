import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoNms from "../../assets/logo-nms.jpg";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const { user, logout} = useContext(UserContext);
    const navigate = useNavigate();
    function removeLoginInfor() {
        logout();
        navigate("/");
    }
    return (
        <Navbar expand="lg" className="border-bottom" style={{ background: "#f3efef" }}>
            <Container className="justify-content-around">
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img src={logoNms} alt="logo" width="80" height="80" className="d-inline-block align-top"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link as={Link} to="/home" className="mx-2 fw-medium">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/category" className="mx-2 fw-medium">Category</Nav.Link>
                        <Nav.Link as={Link} to="/news" className="mx-2 fw-medium">News</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2 fw-medium">Users</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2 fw-medium">Settings</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        {
                            user ? (
                                <>
                                    <Button 
                                        style={{background: "#0a4e7bff", border: "none"}} 
                                        className="me-3 px-3">
                                        Welcome, {user.username}
                                    </Button>
                                    <Button 
                                        style={{background: "#0a4e7bff", border: "none"}} 
                                        className="px-3" onClick={removeLoginInfor}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button style={{ background: "#0a4e7bff", border: "none" }} className="me-3 px-3">Login</Button>
                                    <Button style={{ background: "#0a4e7bff", border: "none" }} className="px-3">Sign in</Button>
                                </>
                            )
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;