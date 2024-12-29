import { Offcanvas, Stack} from "react-bootstrap";
import { useCardContext } from "../context/CardContext";
import SideBarItems from "./SideBarItems";
import productItems from '../data/products.json';
type SideBarProp = {
    isOpen: boolean
}
function SideBar({isOpen}: SideBarProp) {
    const {closeCart,cartItems} = useCardContext();
    return(
        <Offcanvas show={isOpen} onHide={closeCart} place='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map((item) => (
                            <SideBarItems key={item.id} {...item} />
                        ))
                    }
                    <div className="fw-bold fs-5 text-dark">
                        Total:{' '}
                        {  cartItems.reduce((total, currentItem) => {
                            const product = productItems.find(
                                (item) => item.id === currentItem.id )                                
                                return total + (product?.price ? parseFloat(product.price) : 0 ) * currentItem.qty                          
                            }, 0)

                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default SideBar;