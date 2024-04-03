import { useState, useRef } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

gsap.registerPlugin(useGSAP);

function App() {
  const [count, setCount] = useState(0)
  const container = useRef()
  const { contextSafe } = useGSAP({ scope: container })

  useGSAP(() => {
    gsap.fromTo(".box", { x: -200 }, { x: 200 });
  }, { scope: container, dependencies: [count] })


  const handleClick = contextSafe(() => {
    gsap.fromTo(".box2", { rotation: 0 }, { rotation: 180 });
  });

  return (
    <div ref={container}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="box"></div>
      <button onClick={handleClick}>click</button>
      <div className="box2"></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
