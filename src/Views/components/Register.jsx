import React, { useState } from 'react'
import { Container,Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Sighn_up } from '../../Redux/Reducers/Homepage_data'


import Register_c from '../static/Register_static'

export default function Register() {
const dispatch=useDispatch();

const st=[...Object.keys(Register_c.logins)]
const[va,sv]=React.useState(st)
const s=(ev,i)=>{
   st[i]=ev;
   console.log(st)
sv(st)
}
console.log(va)
const Submit=()=>{
    dispatch(Sighn_up(va))
}
  return (
    <Container>
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
                 <button onClick={()=>Submit()}>{Register_c.submit}</button>
                 <Link to="/login">{Register_c.login}</Link>
           
        </Card>
    </Container>
  )
}
