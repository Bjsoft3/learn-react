import { useCallback, useState, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [psw, setPsw] = useState(false)

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let psw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNum) str += "0123456789"
    if (allowChar) str += "!@#$%^&*_-+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      psw += str.charAt(char)
    }

    setPsw(psw)

  }, [length, allowNum, allowChar, setPsw])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(psw)
  }, [psw])

  useEffect(() => {
    passwordGenerator();
  }, [length, allowChar, allowNum, passwordGenerator])

  return (
    <>
      <div className='w-100 max-v-md mx-auto shadow-md rounded-ls px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={psw}
            className='outline-none bg-white-700 w-full py-1 px-3'
            placeholder='Password' 
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
              type='range' 
              name=''
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
              <label>length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
              type='checkbox' 
              defaultChecked={allowNum}
              onChange={() => { 
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
              type='checkbox' 
              defaultChecked={allowChar}
              onChange={() => { 
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
