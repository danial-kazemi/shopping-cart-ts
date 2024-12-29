import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useCardContext } from "../context/CardContext";

function Navbar() {
    const {cartQty, openCart, closeCart} = useCardContext();
    return(
        <NavbarBS className="bg-dark text-light mb-3 nav">
            <Container>
                <span className="">Menu</span>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink} className="text-light">Home</Nav.Link>
                    <Nav.Link to='/shop' as={NavLink} className="text-light">Shop</Nav.Link>
                    <Nav.Link to='/about' as={NavLink} className="text-light">About</Nav.Link>
                    <Nav.Link to='/cart' as={NavLink} className="text-light">Cart</Nav.Link>
                </Nav>
                <Button variant="outline-light" onClick={openCart} style={{width:'3rem', height:'3rem', position:'relative', fontSize:'1.2rem'}}>
                    <i className="bi bi-cart"></i>
                    <span className='rounded-circle bg-secondary d-flex justify-content-center align-items-center' style={{width:'1.2rem',height:'1.2rem',bottom:'0',right:'0', transform: 'translate(25%,25%)',fontSize:'1.2rem' ,position:'absolute'}}>{cartQty}</span>
                </Button>
            </Container>
        </NavbarBS>
    )
}
export default Navbar