import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { DefaultLayouts } from '../layouts/DefaultLayouts'
import { NotFound } from '../pages/NotFound'

export function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
