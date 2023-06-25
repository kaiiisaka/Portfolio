import { useState } from 'react'

function App() {

    const [state, setState] = useState(0)

  return (
    <>
        <div className='border bg-amber-400'>{state}</div>
        <button className='border border-red-700 rounded-2xl' onClick={() => {setState(state + 1)}}>CLICK+</button>
        <button className='border border-blue-600 rounded-2xl' onClick={() => {setState(state - 1)}}>CLICK-</button>
    </>
  )
}

export default App
