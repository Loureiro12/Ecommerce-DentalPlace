import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { DefaultLayouts } from '../layouts/DefaultLayouts'

export function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
