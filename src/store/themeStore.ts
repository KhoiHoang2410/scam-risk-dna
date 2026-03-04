import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  isDark: boolean
  toggle: () => void
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('light', !isDark)
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDark: true,
      toggle: () => {
        const newIsDark = !get().isDark
        set({ isDark: newIsDark })
        applyTheme(newIsDark)
      },
    }),
    {
      name: 'scam-risk-dna-theme',
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.isDark)
      },
    }
  )
)
