// import {Example} from "../assets/navbar";

import {Component} from "react"
import Button  from "./components/Elements/Btn/Button";
// class Btn extends Component{ statefull components
//   render(){
//     return(
//       <><h1>test</h1></>
//     )
//   }
// }
// const Btn = ({variant = "red",children = "onichan"}) => { //stateless component
// return (<>
//   <button className={`bg-${variant}-700`}>{children}</button>
// </>)
// }
function App(){
  return (<>
  {/* <button>click me</button> <br />
  <Btn variant="black">login</Btn>
  <h1>tes</h1> */}
  <Button>tes</Button>
  </>)
}

export default App