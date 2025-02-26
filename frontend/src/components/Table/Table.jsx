import React, { useEffect, useState } from 'react'
import "./Table.css"
import api from '../../database/api'

export default function Table() {
  const [data, setData]=useState([])
  // const url ='http://localhost:5000/employees'

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
<td>{c.admission_date}</td>
<td>{c.phone}</td>
  </tr>
 )})}
</tbody>

    </table>
  )
}
