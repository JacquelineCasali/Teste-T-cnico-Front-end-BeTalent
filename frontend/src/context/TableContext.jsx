import { createContext, useEffect, useState } from "react";
import api from "../database/api";

export const TableContext = createContext()
export default function TableProvider({children}) {

 const [busca, setBusca] = useState("");
 const [data, setData]=useState([])
 const [loading,setLoading]=useState(true)
//busca
 const searchLowerCase = busca.toLowerCase();
  const dados = data.filter((funcionario) =>
  funcionario.name.toLowerCase().includes(searchLowerCase)||
 funcionario.job.toLowerCase().includes(searchLowerCase)|| 
 funcionario.phone.toLowerCase().includes(searchLowerCase)
);

//api
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

    return (
        <TableContext.Provider value={{dados,setData,busca,setBusca,loading,setLoading}}>
        {children}
        </TableContext.Provider>
  
  
     )

}