
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png'
import styles from '../Navbar/Navbar.module.css'

export default function NavBar() {
  return (
    <div className={`${styles}`}>
      <Navbar expand="lg" className="p-3">
      <Container fluid>
      <div className={`${logo} text-end`}><img className='w-75' src={logo} alt="" /></div>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=''>
          <Nav
            className="mx-auto my-2 my-lg-0 text-end "
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='mx-2' href="/">الرئيسية</Nav.Link>
            <Nav.Link className='mx-2' href="/">من نحن</Nav.Link>
            <Nav.Link className='mx-2' href="/">اتصل بنا</Nav.Link>
            <Nav.Link className='mx-2' href="/">الدعم الفني</Nav.Link>
            <Nav.Link className='mx-2' href="/">أرقام التشغيل</Nav.Link>
            <Nav.Link className='mx-2' href="/">سياسة الخصوصية</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}