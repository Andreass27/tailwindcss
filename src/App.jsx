import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Form2 from './Form2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='p-3 border-solid border-2 border-green-500 rounded-lg bg-red-300/20'>
    <div>
<h1 className="text-7xl text-blue-600 font-medium p-2">
      Привет Мир 
    </h1>
      </div>
    
      <div className='mt-10 mx-auto '>
        footer
      </div>
    </div>
    <div><Form></Form></div>
    <div><Form2></Form2></div>
    </>
  )
}

export default App
