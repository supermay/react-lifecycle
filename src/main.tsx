import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Canvas from './Canvas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    {/*  TODO: here we need width and height for the parent div, check if we can add styling directly to the canvas */}
      <div className={"wrapper"}>
          <Canvas />
      </div>
  </StrictMode>,
)
