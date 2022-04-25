import React from "react";
import { Navbar, NavbarBrand,Container,Nav,NavDropdown, NavItem, Card, Row, Col, CardGroup, CardImg, ModalFooter } from "react-bootstrap";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import homepage_static from "../static/homepage_static";
import { Link } from "react-router-dom";
import "../../style.css"
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody } from "reactstrap";
export default function Home(props) {
  const value = useSelector((state) => state.Homedata.value);
  return <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand  className="link"><h1>{homepage_static.Name}</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav className="me-right">
       {homepage_static.routes.map((v,i)=>
       {
         return(
          <NavItem key={i} className="homePage_Item"> 
           <Link to={'/'+v} className="link" >{v}</Link>
         </NavItem>
         );
       })}

      </Nav>
     
        
    </Navbar.Collapse>
  </Container>
</Navbar>

<Container>
<div id="quote">
  <p>{homepage_static.quote}</p>
  <i id="">{homepage_static.quotea}</i>
</div>

<Row xs={1} md={4} className="g-4" id="home">
 
  {Object.keys(homepage_static.features).map((value,index)=>{
    return(
      
       <Card className='h_card'>
         <CardHeader>{value}</CardHeader>
         <CardImg src={homepage_static.features[value][1]} id='CardImg'></CardImg>
         <CardBody>{homepage_static.features[value][0]}</CardBody>
        </Card> 
      );
    }
    )}
  
   </Row>
     <ModalFooter>
       {homepage_static.About}
     </ModalFooter>
   </Container>
  </div>;
}
