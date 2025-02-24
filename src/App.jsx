import { useState } from 'react'
import './App.css'
import Calculator from './component/Calculator'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Calculator/>
      <Footer/>
    </div>
  )
}

export default App
