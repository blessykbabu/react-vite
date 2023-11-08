import { useState } from 'react'

import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import UncontrolledInput from './components/Uncontrolledinput'
import ControlledInput from './components/Controlledinput'
import Basic from './components/Basic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ControlledInput/>
     <UncontrolledInput/> */}
     <Basic/>
     {/* data */}
     {/* Some changes */}
     {/* Some more changes... */}
     {/* React branch */}
    </>
  )
}

export default App
