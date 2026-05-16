import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'

function Placeholder({ name }: { name: string }) {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
      {name} — coming soon
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Placeholder name="Login" />} />
        <Route path="/register" element={<Placeholder name="Register" />} />
        <Route path="/dashboard" element={<Placeholder name="Dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}
