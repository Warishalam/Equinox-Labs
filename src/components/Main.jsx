import Person1 from "./Person1"
import Person2 from "./Person2"
import React from "react"


function Main() {

  const [data , setData] = React.useState([])

     console.log("First Data" +data[0])


  const getData = () => {
    fetch(`http://localhost:8000/data` , {
    }).then((res) => res.json())
      .then((res) => {
        setData(res)
         console.log("Hello data")
          console.log(res)
        })
      .catch((err) => console.log(err));

}
// getData();
React.useEffect(() => {
    getData();
} , [])

console.log("Second Data" + data)

let data1 = data.filter((item) => {
           return item.Name === "Alok kumar Gautam ( 43 ) (BDE) (NA)"
    })

    console.log("Data1" +data1)

let data2 = data.filter((item) => {
      return item.Name === "kalpesh ( 43 ) (BDE) (NA)"
})

console.log( "data2" ,data2)
       return (
           <div>
               <Person1 data = {data1} /> 
               <Person2 data = {data2} />
           </div>
       )
}

export default Main;