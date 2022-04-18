import { useState } from "react";
import Dropdown from "./dropdown";

// const options = [
//   { label: "AAA", value: "aaa" },
//   { label: "BBB", value: "bbb" },
//   { label: "CCC", value: "ccc" },
// ];

// function onChangeInput(value:any){
//   console.log(value);
// }

// function App(){
//   return(
//     <Dropdown  />
//   )
// }

export default function App (){
const [selected, setSelected] = useState("  Choose One");

const options = ["aaa", "bbb", "ccc"];


return (
  <Dropdown selected={selected} setSelected={setSelected} options = {options}/>
)

}
