import { RouterProvider } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import { router } from './router'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}
