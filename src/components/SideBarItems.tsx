import { Stack, Button } from 'react-bootstrap'
import { useCardContext } from '../context/CardContext'
import productItems from '../data/products.json'
type SideBarItemsProps = {
    id: string
    qty: number
}
function SideBarItems({id, qty} : SideBarItemsProps ) {
    const {removeItem} = useCardContext();
    const product = productItems.find((item)=> item.id === id)

    if(product === null) return null

    return(
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            
            <img src={product?.imageUrl} style={{width: '125px' ,height:'75px', objectFit:'cover'}}/>
            <div className='me-auto text-dark'>
                <div>
                    {product?.title}{'x'}
                    {qty > 1 && (<span className='text-muted' style={{fontSize:'.8rem'}}> &times;{` ${qty}`}</span>)}
                </div>
                <div>                                 
                    {product?.price ? (parseFloat(product.price) * qty) : null}
                </div>
                <Button variant='outline-dark' size='sm' onClick={()=> removeItem(id)}>&times;</Button>
            </div>
        </Stack>
    )

}
export default SideBarItems;