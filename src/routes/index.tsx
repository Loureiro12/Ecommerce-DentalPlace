import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { DefaultLayouts } from '../layouts/DefaultLayouts'
import { NotFound } from '../pages/NotFound'
import { ProductDetails } from '../pages/productDetails'

export function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
