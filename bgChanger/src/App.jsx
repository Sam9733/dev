import { red } from "color-name"
import { useState } from "react"

function App() {
  const [color,setColor]= useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"style={{backgroundColor: color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl p-4">
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-lg" style={{backgroundColor:"lightsalmon"}}>Red</button>
        <button onClick={()=>setColor("lightgreen")} className="outline-none px-4 py-1 rounded-lg" style={{backgroundColor:"lightgreen"}}>Green</button>
        <button onClick={()=>setColor("lightblue")} className="outline-none px-4 py-1 rounded-lg" style={{backgroundColor:"lightblue"}}>Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
