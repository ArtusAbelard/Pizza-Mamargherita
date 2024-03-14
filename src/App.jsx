import { useState } from 'react'
import Home from './assets/Compoments/Home'
import data from './../public/Json/data.json'
import './App.css'





function App() {
  const [count, setCount] = useState(0)
  console.log(data);

  return (
    <div className=' w-screen overflow-hidden bgpizz h-screen flex flex-col  relative z-10 justify-center items-center'>
      <Home data={data}></Home>
      <div className='pizza pizza1 rounded-full z-1'>

      </div>
      <div className='pizza pizza2 rounded-full ms-[300px] z-1'>

      </div>
      <div className='pizza pizza3 rounded-full ms-[600px] z-1'>

      </div>
      <div className='pizza pizza4 rounded-full ms-[900px] z-1'>

      </div>
      <div className='pizza pizza1 ms-[1200px] pizza5 rounded-full z-1'>

      </div>
      <div className='pizza pizza2 ms-[1500px] rounded-full z-1'>

      </div>
      <div className='pizza pizza3 ms-[1800px] rounded-full z-1'>

      </div>
      <div className='pizza pizza4 ms-[2100px] rounded-full z-1'>

      </div>
      
    </div>
  )
}

export default App
