import React from 'react'
import "./Table.css"
export default function Table() {
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
  <tr className='linha'>
<td></td>
<td>Giovana</td>
<td>Front_end</td>
<td>00/00/0000</td>
<td>+55(55) 55555-5555</td>

  </tr>
 
</tbody>

    </table>
  )
}
