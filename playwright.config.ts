import { defineConfig, devices } from "@playwright/test"

const PORT = 3210
const BASE_URL = process.env.BASE_URL

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: BASE_URL ?? `http://localhost:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: BASE_URL
    ? undefined
    : {
        command: `pnpm -s start -p ${PORT}`,
        port: PORT,
        reuseExistingServer: false,
        env: { NEXT_PUBLIC_SITE_URL: `http://localhost:${PORT}` },
      },
})
