import { Head } from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Title from "../components/Title/Tlite";



export default function Home() {
  return (
< >
<Head title="Projeto BeTalent"/> 
  <Navbar/>
   <div className="main">
  <Title >Funcionários</Title> 
  <Search/> 
  </div>
 
</>
  )
 
  
}
