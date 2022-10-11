import React from "react"
import TableList2 from "./TableList2"

const Table2 = ({data}) => {

    return (
          <div style = {{
              width : "60%",
              marginRight : "10%"
          }}>
             <TableList2 data = {data}/> 
          </div>
    )
}

export default Table2