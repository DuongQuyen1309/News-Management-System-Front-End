import React from "react";
import { Container } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-dark py-4" style={{background: "#f3efef"}}>
      <Container fluid className="d-flex flex-column flex-md-row justify-content-around align-items-start align-items-md-center">
        <h5 className="fw-bold mb-3 mb-md-0">New Management System</h5>
        
        <div className="d-flex gap-3 mb-3 mb-md-0">
          <a href="https://facebook.com" className="text-dark"><BsFacebook size={20} /></a>
          <a href="https://twitter.com" className="text-dark"><BsTwitter size={20} /></a>
          <a href="https://linkedin.com" className="text-darkc"><BsLinkedin size={20} /></a>
        </div>
        
        <small className="text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </small>
      </Container>
    </footer>
  );
}

export default Footer;