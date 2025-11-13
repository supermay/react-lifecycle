import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import LifeCycleOverview from "./LifeCycleOverview.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LifeCycleOverview />
  </StrictMode>,
)