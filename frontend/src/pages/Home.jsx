import { Head } from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import Title from "../components/Title/Tlite";
import Search from "../components/Search/Search";
import { useContext } from "react";
import { TableContext } from "../context/TableContext";

export default function Home() {
  
const {dados,busca,setBusca}=useContext(TableContext)

  return (
    
< >


<Head title="Projeto BeTalent"/> 
  <Navbar/>
   <div className="main">
   <div className="titles">

<Title >Funcionários</Title> 
<Search busca={busca} setBusca={setBusca}/> 
</div>

<Table dados={dados} />
   </div>

</>
  )
 
  
}
