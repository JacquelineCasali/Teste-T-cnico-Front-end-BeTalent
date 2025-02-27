import React, { useEffect, useState } from 'react'
import "./Table.css"
import api from '../../database/api'
import {  addDays } from "date-fns";
import formatarTelefone from '../../utils/formatarTelefone';
export default function Table() {


  const [data, setData]=useState([])
 
  useEffect(()=>{

    api.get("/employees")
    .then((response)=>{
         setData(response.data)})
         .catch((err)=>console.log(err))
     },[])
   
  
 
 
  return (
    <table>
          <thead >
            <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
            
            </tr>
          </thead> 
<tbody>
{data.map((c, i) => {
            return (
  <tr key={i}>
<td>
  <img className='img'
  src={c.image} alt="sem foto"/>
  </td>
<td>{c.name}</td>
<td>{c.job}</td>
<td>{new Intl.DateTimeFormat('pt-BR',{dateStyle:'short'}).format(
  addDays(new Date(c.admission_date),1)
 )}</td>
<td>{formatarTelefone(c.phone)}</td>
  </tr>
 )})}
</tbody>

    </table>
  )
}
