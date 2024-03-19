import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>El mati es weko</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El contador es {count}
        </button>
        <p>
          Editar <code>src/App.jsx</code> Y guardalo para probar el código.
        </p>
      </div>
      <p className="read-the-docs">
        Clickea en el logo de Vite y React para aprender más.
      </p>
    </>
  )
}

export default App
