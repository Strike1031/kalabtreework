import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css'

function MyNavbar() {
    return (
        <div className= "my-navbar" >
            <Navbar collapseOnSelect expand="lg"  >
                <Container fluid className='mx-5'>
                    <Navbar.Brand href="#home">
                        Kolabtree
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center">
                        <Nav>
                        <Nav.Link href="#" className='my-navlink'>- Home</Nav.Link>
                        <Nav.Link href="#contact-us" className='my-navlink'>contact us</Nav.Link>
                        <Nav.Link href="#services" className='my-navlink'>services</Nav.Link>
                        <Nav.Link href="#our-team" className='my-navlink'>our team</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>     
    );
}

export default MyNavbar;