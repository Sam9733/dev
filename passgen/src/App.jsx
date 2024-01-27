import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")

//ref hook
const passref=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) {
      str += "0123456789"
    }
    if (charallow) {
      str += "!@@#$%^&*-_+=[]{}()`~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numallow, charallow, setPassword])
  
const cpytoclip=useCallback(()=>{
  passref.current?.select()
  passref.current?.setSelectionRange(0,9)
window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numallow, charallow, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passref}
          />
          <button
          onClick={cpytoclip}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />

            <label >Length: {length}</label>
          </div>
          <div className='flex items-start gap-x-1'>
            <input type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setNumallow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-start gap-x-1'>
            <input type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => {
                setCharallow((prev) => !prev)
              }}
            />
            <label htmlFor="charactersInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
