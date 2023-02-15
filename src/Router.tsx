import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefautLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
