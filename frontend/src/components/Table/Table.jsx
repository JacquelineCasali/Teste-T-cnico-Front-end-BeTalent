import React, { useEffect, useState } from 'react'
import "./Table.css"
import api from '../../database/api'
import {  addDays } from "date-fns";
import formatarTelefone from '../../utils/formatarTelefone';
import Search from "../Search/Search"
import Title from '../Title/Tlite';
import Loading from '../Loading/Loading';
export default function Table() {

  const [loading,setLoading]=useState(true)
  const [data, setData]=useState([])
  const [busca, setBusca] = useState("");
   useEffect(()=>{
try{
    api.get("/employees")
    .then((response)=>{
    
         setData(response.data)})
        
}catch(err){
  console.log(err)
}
     },[])
     useEffect(()=>{
      setLoading(false)
           },[])  
   
            const searchLowerCase = busca.toLowerCase();
            console.log(busca);
            const dados = data.filter((funcionario) =>
             funcionario.name.toLowerCase().includes(searchLowerCase)||
            funcionario.job.toLowerCase().includes(searchLowerCase)|| 
            funcionario.phone.toLowerCase().includes(searchLowerCase)
       
            
          );   

 
  return (
 <>
    <div className="titles">

    <Title >Funcionários</Title> 

       <Search busca={busca} setBusca={setBusca}/> 
    </div>
 
 
    {dados.length>0?(
 
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



{dados.map((c, i) => {
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
  ):
  <Loading/>
  }
    </>
  )
}
