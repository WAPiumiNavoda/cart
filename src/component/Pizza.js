import React, { useState } from 'react'
import { Card , Col,Row ,Modal}from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Pizza = ({pizza}) => {

    const [quantity,setQuantity] = useState("small");
    const [variant,setVariant] = useState(1);
    const [total,swetTotal] = useState("")

  const [show,setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true); 

  return (
    <div>
      <Card className='mb-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.image}
      onClick={handleShow}
      />
      <Card.Body>
        <Card.Title>{pizza.title}</Card.Title>
        <Card.Text>
        {pizza.category}
        </Card.Text>
        <h6>Variants</h6>
        <select value={variant}   onChange={(e)=>setVariant(e.target.value)}>
            {pizza.variants.map((variant)=>(
                <option 
               
                >{variant}</option>
            ))}
        </select>
        {/* <Card.Text>
        {pizza.prize}
        </Card.Text> */}
        <h6>Qantity</h6>
        <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((v,i)=>(
                <option value={i+1}
                
                >{i+1}</option>
            ))}
        </select>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
      <Row>
        <Col >Price: {pizza.price[0][variant]* quantity}</Col>
        <Col ></Col>
      </Row>
    </Card>

    {/* model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Offcanvas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Img variant="top" src={pizza.image}
      onClick={handleShow}
      />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Pizza