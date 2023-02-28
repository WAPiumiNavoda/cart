// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'; 
// import { Link } from 'react-router-dom'


// const Header = () => {


 
//   return (
//     <div>
//         <Navbar bg="light" expand="lg">
//       <Container >
//         <Navbar.Brand href="/home">Ayurvedic</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="m-auto my-2 my-lg-0 "
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="/sellerCategoryAdd">Product</Nav.Link>
//             <Nav.Link href="#action2">Clinic</Nav.Link>
//             <Nav.Link href="#">Blog</Nav.Link>
            
//           </Nav>
         
//           <i class="bi bi-bell px-2"></i>
//           <i class="bi bi-cart px-5"></i>
//           <NavDropdown title="navodapiumi691@gmail.com" id="navbarScrollingDropdown">
             
//               <NavDropdown.Item >
//                 Logout
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/adminhome">
//                 Login
//               </NavDropdown.Item>
//             </NavDropdown>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     <Nav>
//           <Dropdown alignRight>
//             <Dropdown.Toggle variant="success">
//               <FaShoppingCart color="white" fontSize="25px" />
//               <Badge>{cart.length}</Badge>
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{ minWidth: 370 }}>
//               {cart.length > 0 ? (
//                 <>
//                   {cart.map((prod) => (
//                     <span className="cartitem" key={prod.id}>
//                       <img
//                         src={prod.image}
//                         className="cartItemImg"
//                         alt={prod.name}
//                       />
//                       <div className="cartItemDetail">
//                         <span>{prod.name}</span>
//                         <span>₹ {prod.price.split(".")[0]}</span>
//                       </div>
//                     </span>
//                   ))}
//                   <Link to="/cart">
//                     <Button style={{ width: "95%", margin: "0 10px" }}>
//                       Go To Cart
//                     </Button>
//                   </Link>
//                 </>
//               ) : (
//                 <span style={{ padding: 10 }}>Cart is Empty!</span>
//               )}
//             </Dropdown.Menu>
//           </Dropdown>
//         </Nav>
        
//     </div>
//   )
// }

// export default Header