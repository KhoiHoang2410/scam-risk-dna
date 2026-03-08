import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'
import { createElement } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { LandingPage } from '@/pages/LandingPage'
import { QuizPage } from '@/pages/QuizPage'
import { ResultPage } from '@/pages/ResultPage'
import { ArchetypesPage } from '@/pages/ArchetypesPage'
import { ArchetypeDetailPage } from '@/pages/ArchetypeDetailPage'
import { TipsPage } from '@/pages/TipsPage'
import { ResumePage } from '@/pages/ResumePage'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : String(error)
  return createElement(
    'div',
    { className: 'min-h-screen bg-bg-shell flex items-center justify-center px-4' },
    createElement(
      'div',
      {
        className: 'max-w-md text-center p-8 rounded-2xl',
        style: {
          background: 'rgba(20,20,43,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      },
      createElement('div', { className: 'text-4xl mb-4' }, '💥'),
      createElement(
        'h2',
        { className: 'text-xl mb-3 text-white', style: { fontFamily: '"Cinzel Decorative", serif' } },
        'Something went wrong'
      ),
      createElement('p', { className: 'text-sm mb-2', style: { color: '#CBD5E1' } }, message),
      createElement(
        'button',
        {
          className: 'mt-6 px-6 py-3 rounded-xl font-semibold text-white',
          style: { background: '#7C3AED', cursor: 'pointer' },
          onClick: resetErrorBoundary,
        },
        'Try Again'
      )
    )
  )
}

const rootRoute = createRootRoute({
  component: () =>
    createElement(
      ErrorBoundary,
      { FallbackComponent: ErrorFallback },
      createElement(Outlet, null)
    ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
})

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz',
  component: QuizPage,
})

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/results/$slug',
  component: ResultPage,
})

const archetypesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/archetypes',
  component: ArchetypesPage,
})

const archetypeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/archetypes/$slug',
  component: ArchetypeDetailPage,
})

const tipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tips',
  component: TipsPage,
})

const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  component: ResumePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  quizRoute,
  resultsRoute,
  archetypesRoute,
  archetypeDetailRoute,
  tipsRoute,
  resumeRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
