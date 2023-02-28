import React from 'react'
import{Container,Row,Col }from 'react-bootstrap/esm'
import allData from '../data/data'
import Pizza from './Pizza'
const AllData = () => {
  return (
    <div>
        <Container>
            <Row>
                {
                        allData.map((pizza)=>(
                        <Col>
                           <Pizza key={pizza._id}
                               pizza={pizza}
                           />
                        </Col>
                            
                            ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default AllData