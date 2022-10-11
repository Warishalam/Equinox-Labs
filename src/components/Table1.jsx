import React from "react"
import TableList1 from "./TableList1"


const Table1 = ({data}) => {

    console.log("Table1" , data)

    return (
          <div style = {{
              width : "60%",
              marginRight : "10%"
          }}>
             <TableList1 data = {data}/> 
          </div>
    )
}

export default Table1