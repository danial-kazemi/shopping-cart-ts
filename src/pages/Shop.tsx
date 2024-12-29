import Product from '../components/Product';
import JSONProducts from '../data/products.json';
import { Row, Col } from 'react-bootstrap';

function Shop() {     
    return(
        <>
            <h1 className="text-light">Shop</h1>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {JSONProducts.map((item)=>(                    
                    <Col key={item.id}>
                        <Product {...item} />                        
                    </Col>
                ))}
            </Row>    
        
        </>
    )
}

export default Shop