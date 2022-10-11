const PersonName1 = ({data}) => {

    console.log("personName1" , data)
    return (
        <div style = {{
            width : "25%",
            display: "flex",
            flexDirection : "row-reverse",

            }}> 
          <div style = {{
               width : "200px",
               textAlign: "center",
               paddingTop : "25%"
              
          }}> {   
             {/* data[0].Name */}
          }
          </div>
        </div>
      )
}

export default PersonName1