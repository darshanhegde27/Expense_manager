import React from "react";
import { Navbar, NavbarBrand,Container,Nav,NavDropdown, NavItem, Card, Row, Col, CardGroup } from "react-bootstrap";
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
  <Container fluid>
    <Navbar.Brand href="#home" className="link">{homepage_static.Name}</Navbar.Brand>
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
<Container fluid>
<Row xs={1} md={4} className="g-4">
 
  {Object.keys(homepage_static.features).map((value,index)=>{
    return(
      
       <Card className='card'>
         <CardHeader>{value}</CardHeader>
         <CardBody>{homepage_static.features[value]}</CardBody>
        </Card> 
      );
    }
    )}
  
   </Row>
   </Container>
  </div>;
}
