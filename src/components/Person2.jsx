
import PersonName2 from "./PersonName2"
import Table2 from "./Table2"

const Person2 = ({data}) => {

    return (
        <div style = {{
            display : "flex",
            justifyContent : "space-around"
        }}>
             {/* <PersonName2 data = {data}/> */}
             <Table2 data = {data}/>
        </div>
    )

    }
    
    export default Person2