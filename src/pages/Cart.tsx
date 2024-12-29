import { useCardContext } from "../context/CardContext";
function Cart() {
    const {cartItems}  = useCardContext()
    console.log(cartItems)
    return(
        <h1 className="text-light">Cart</h1>

    )

}

export default Cart;