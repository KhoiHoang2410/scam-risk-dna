import { RouterProvider } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import { router } from './router'
import { ThemeToggle } from './components/ui/ThemeToggle'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <ThemeToggle />
    </>
  )
}
