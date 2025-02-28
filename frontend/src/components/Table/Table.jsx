import React, { useContext } from 'react'
import "./Table.css"

import {  addDays } from "date-fns";
import formatarTelefone from '../../utils/formatarTelefone';

import Loading from '../Loading/Loading';
import { BiCircle } from 'react-icons/bi';
import { TableContext } from '../../context/TableContext';
export default function Table({dados}) {
 useContext(TableContext)
   
     
  return (
 <>
 
    {dados.length>0?(
  <table>
          <thead >
            <tr>
            <th>FOTO</th>
            <th>
            
              NOME   <BiCircle/></th>
            
            <th className='hide-on-mobile'>CARGO</th>
            <th className='hide-on-mobile'>DATA DE ADMISSÃO</th>
            <th className='hide-on-mobile'>TELEFONE</th>
            
            </tr>
          </thead> 
<tbody>

{dados.map((c, i) => {
  return (
<tr key={i}>
<td>
<img className='img'
src={c.image} alt="sem foto"/>
</td>
<td>{c.name}</td>
<td className='hide-on-mobile'>{c.job}</td>
<td className='hide-on-mobile'>{new Intl.DateTimeFormat('pt-BR',{dateStyle:'short'}).format(
addDays(new Date(c.admission_date),1)
)}</td>
<td className='hide-on-mobile'>{formatarTelefone(c.phone)}</td>
</tr>
)})}
</tbody>

    </table>
  ):
  <Loading/>
  }
    </>
  )
}
