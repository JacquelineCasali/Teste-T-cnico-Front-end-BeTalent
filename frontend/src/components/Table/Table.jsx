import React, { useContext, useState } from 'react'
import "./Table.css"

import {  addDays } from "date-fns";
import formatarTelefone from '../../utils/formatarTelefone';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Loading from '../Loading/Loading';

import { TableContext } from '../../context/TableContext';
import { BsCircleFill } from 'react-icons/bs';
export default function Table({dados}) {
 useContext(TableContext)
 const [isSeta, setIsSeta] = useState(true);
    
 const toggleExpand = (id) => {
  setIsSeta(isSeta === id ? true : id);
};

//  function openSeta() {
//   setIsSeta(false);

// }

// function closeSeta() {
//   setIsSeta(true);


// }
  return (
 <>
 
    {dados.length>0?(
  <table>
          <thead >
            <tr>
            <th >FOTO</th>
            <th>
            
              NOME   </th>
            
            <th className='hide-on-mobile'>CARGO</th>
            <th className='hide-on-mobile'>DATA DE ADMISSÃO</th>
            <th className='hide-on-mobile-border' >TELEFONE</th>
            <th className='on-mobile'>
              <BsCircleFill size={8}/>
            </th>
            </tr>
          </thead> 
<tbody>

{dados.map((c) => (
  <React.Fragment key={c.id}>
 {/* // return ( */}
<tr  >
<td  style={{borderBottomLeftRadius:"8px"}}>
<img className='img'
src={c.image} alt="sem foto"/>
</td>
<td>{c.name}</td>

<td className='hide-on-mobile'>{c.job}</td>
<td className='hide-on-mobile'>{new Intl.DateTimeFormat('pt-BR',{dateStyle:'short'}).format(
addDays(new Date(c.admission_date),1)
)}</td>
<td className='hide-on-mobile-border'>{formatarTelefone(c.phone)}</td>


<td className='on-mobile '
style={{height:"50px"}}
onClick={()=>toggleExpand(c.id)} >  
{isSeta ===c.id ? (
   <FiChevronUp
    size={32}
   cursor={"pointer"}
   color="#0500ff"
   style={{marginTop:"5px"}}
 />
):(


<FiChevronDown  
   
size={32}
               cursor={"pointer"}
               color="#0500ff"
               style={{marginTop:"5px"}}
               
             />
)}

                </td>

</tr>
{/* //expandir para baixo  */}
{isSeta ===c.id &&(
  <tr>
     <td colSpan={3} style={{padding:"  35px ",
      boxShadow: "0px 1px 2px 0px #00000033"
     }} >
     <div className='expanção'>
      <strong >Cargo</strong>
      <p>{c.job}</p>
         </div>      
         <div className='expanção'>
         <strong>Data de admissão</strong>
      <p >{new Intl.DateTimeFormat('pt-BR',{dateStyle:'short'}).format(
addDays(new Date(c.admission_date),1)
)}</p>
          </div>            
     
    
          <div className='expanção'>
  <strong>Telefone</strong>
      <p>{formatarTelefone(c.phone)}</p>
                       
  </div>
    
            
                  </td>
  </tr>
)}

 </React.Fragment>
))}
</tbody>

    </table>
  ):
  <Loading/>
  }
    </>
  )
}
