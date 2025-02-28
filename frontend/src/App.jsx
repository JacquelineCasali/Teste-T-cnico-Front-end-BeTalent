
import TableProvider from "./context/TableContext"
import AppRoutes from "./Routes/Routes"



function App() {
 

  return (

    <TableProvider>
  <AppRoutes/>
    </TableProvider>
  
  )
}

export default App
