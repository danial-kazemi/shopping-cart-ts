import { createContext, useContext, useState, ReactNode} from "react";
import Cart from "../pages/Cart";
import SideBar from "../components/SideBar";
import { useLocalStorage } from "../hooks/useLocalStorage";
type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: string
    qty: number
}

type CartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQty: (id: string) => number
    addItem: (id: string) => void
    decreaseItem: (id: string) => void
    removeItem: (id: string) => void
    cartQty: number
    cartItems: CartItem[]
}

 const  CartContext = createContext({} as CartContext)

export function useCardContext() {
    return useContext(CartContext)
}

export function CartProvider({children}: CartProviderProps) {
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems, setCartItems]= useLocalStorage<CartItem[]>('shopping-cart',[])
    const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0)
    const openCart= () => setIsOpen(true);
    const closeCart= () => setIsOpen(false)

    function getItemQty(id: string) {
        return cartItems.find((item) => item.id === id)?.qty || 0         
    }

    function addItem(id: string) {
        setCartItems((currItems)=> {
            if(currItems.find((item) => item.id === id) == null) {
                return [...currItems, {id, qty: 1}]
            } else {
                return currItems.map((item) => {
                    if(item.id === id){
                        return { ...item, qty: item.qty + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItem(id: string) {
        setCartItems((currItems)=> {
            if(currItems.find((item) => item.id === id) ?.qty == 1) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if(item.id === id){
                        return { ...item, qty: item.qty - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeItem(id: string) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }
    return <CartContext.Provider value={{getItemQty, addItem, decreaseItem, removeItem, cartQty, cartItems, openCart, closeCart }}>{children} <SideBar isOpen={isOpen}/> </CartContext.Provider>
}
 