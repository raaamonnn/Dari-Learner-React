import './stylesheet/Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import appIcon from '../assets/AppIcon.png'

const Header = () => {
    return (
        <>
            <Navbar fixed="top" className="nav" variant="dark">
                <Container>
                    <Navbar.Brand href="../">
                        <div>
                            <img src={appIcon} alt="Dari Learner Logo" width="50" height="50"></img>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Brand href="../" className="navTitle">
                        Dari Learner
                    </Navbar.Brand>
                    <Nav className="navLink">
                        <Nav.Link href="/Download">Download</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
