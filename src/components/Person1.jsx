import PersonName1 from "./PersonName1"
import Table1 from "./Table1"

const Person1 = ({data}) => {
 
      console.log("data" , data)
    return (
        <div style = {{
            display : "flex",
            justifyContent : "space-around",
            marginBottom : "50px"
        }}>
             {/* <PersonName1 data = {data}/> */}
             <Table1 data = {data}/> 
        </div>
    )

    }
    
    export default Person1