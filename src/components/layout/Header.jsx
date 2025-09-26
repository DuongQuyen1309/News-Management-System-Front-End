import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoNms from "../../assets/logo-nms.jpg";
const Header = () => {
    return (
        <Navbar expand="lg" className="border-bottom"  style={{background: "#f3efef"}}>
            <Container className= "justify-content-around">
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img src={logoNms} alt="logo" width="80" height="80" className="d-inline-block align-top"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link className="mx-2 fw-medium">Dashboard</Nav.Link>
                        <Nav.Link className="mx-2 fw-medium">Category</Nav.Link>
                        <Nav.Link href="#action1" className="mx-2 fw-medium">News</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2 fw-medium">Users</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2 fw-medium">Settings</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button style={{background: "#0a4e7bff", border: "none"}} className="me-3 px-3">Login</Button>
                        <Button style={{background: "#0a4e7bff", border: "none"}} className="px-3">Sign in</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;