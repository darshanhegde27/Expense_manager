import React, { useState } from 'react'
import { Container,Card, Alert, Spinner } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setErr, Sighn_up } from '../../Redux/Reducers/Homepage_data'
import { SignUp } from '../../Redux/Services/HomeCalls'
import {
   
    useNavigate

  } from "react-router-dom";
import Register_c from '../static/Register_static'

export default function Register() {
const dispatch=useDispatch();

const st=[...Object.keys(Register_c.logins)]
const[va,sv]=React.useState(st)
//pushing a route
const navi=useNavigate();

const user=useSelector((state)=>state.Homedata.user)
const error=useSelector((state)=>state.Homedata.error)
const s=(ev,i)=>{
   st[i]=ev;
   sv(st)
   setLoading(false);
   dispatch(setErr());
}
const[loading,setLoading]=React.useState(false)
const Submit=async()=>{
         setLoading(true)
         var x=await SignUp(va[0],va[1])
         dispatch(Sighn_up(x)) 
          
    
}
React.useEffect(()=>
{
  {error===''&&user!=''?navi("/login"):setLoading(false)}
},[user,error])
  return (
      
    <Container>
    {error===''&&loading==true?<Spinner animation="grow" />:''}
        <Card id="R_card">
        
            <CardHeader>{Register_c.name}</CardHeader>
             
                 {Object.keys(Register_c.logins).map((v1,i)=>
                 {
                     return(
                     <div key={i}>
                         {Register_c.logins[v1][0]}
                         <input type={Register_c.logins[v1][1]} placeholder={Register_c.logins[v1][2]} onChange={(event)=>s(event.target.value,i)} required></input>
                     </div>)
                 })}
                 <button onClick={()=>Submit()} disabled={loading}>{Register_c.submit}</button>
                 
                 <Link to="/login">{Register_c.login}</Link>
            {error}
        </Card>
        
        
                
                </Container>
                
  )
}
