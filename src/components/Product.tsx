
import { Card, Button } from "react-bootstrap";
import { useCardContext } from "../context/CardContext";
type ProductProps = {
  id: string
  title: string
  imageUrl: string
  price: string
}
function Product({id, title, imageUrl, price}:ProductProps) {
  const {getItemQty, addItem, decreaseItem, removeItem} = useCardContext();
  const qty = getItemQty(id);
  return (
    <Card className="h-100">
      <Card.Img variant='top' src={imageUrl} height='200px' style={{objectFit:'cover'}} />
      {/* <div className="product">
        <div className="product__outer">
            <div className="product__inner">
                <div className="product__image">
                    <img src={imageUrl} width={250} height={250} alt="no-product"/>
                </div>
                <h3 className="text-light">{title}</h3>
                <span className="product__price text-light">{price}</span>
            </div>
        </div>
    </div> */}
    <Card.Body className="d-flex flex-column bg-dark">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2 text-light">{title}</span>
        <span className="ms-2 text-light">{price}</span>
      </Card.Title>
      <div className='mt-auto'>
        {qty === 0 ? (
          <Button className="w-100 btn-secondary" onClick={() => addItem(id)}>Add To Card</Button>
        ) : (
          <div className="d-flex align-items-center flex-column" style={{gap: '5.rem'}}>
            <div className="d-flex align-items-center justify-content-cntert" style={{gap:'.5rem'}}>
              <Button className=" btn-secondary" onClick={()=> addItem(id)}>+</Button>
              <span className="fs-5 m-3 text-light">{qty}</span>
              <Button className="btn-secondary" onClick={()=> decreaseItem(id)}>-</Button>
            </div>
            <Button className="btn-dark" size="sm" onClick={()=>removeItem(id)}>Remove</Button>

          </div>)}
      </div>
    </Card.Body>
    </Card>
    
  )
}

export default Product