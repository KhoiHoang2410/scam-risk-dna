import AxeBuilder from "@axe-core/playwright"
import { expect, test, type Page } from "@playwright/test"

async function answerAll(page: Page, pick: (index: number) => 0 | 1) {
  for (let i = 0; i < 20; i++) {
    await expect(page.getByText(`${i + 1} of 20`)).toBeVisible()
    await page.getByRole("group").getByRole("button").nth(pick(i)).click()
  }
}

async function expectNoA11yViolations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze()
  expect(results.violations.flatMap((v) => v.nodes.map((n) => `${v.id}: ${n.target.join(" ")} ${n.failureSummary}`))).toEqual([])
}

test("landing leads into the quiz", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toContainText("blind spot")
  await expectNoA11yViolations(page)
  await page.getByRole("link", { name: /start the test/i }).first().click()
  await expect(page).toHaveURL(/\/quiz$/)
})

test("taking the whole quiz lands on a result with a defence plan", async ({ page }) => {
  await page.goto("/quiz")
  await expectNoA11yViolations(page)
  await answerAll(page, () => 0)
  await expect(page).toHaveURL(/\/r\/[a-z-]+(\/[a-z]+)?$/)
  await expect(page.getByText("You are...")).toBeVisible()
  await expect(page.getByRole("list", { name: "Your traits" }).getByRole("listitem")).toHaveCount(3)
  await expect(page.getByRole("heading", { name: "Your blind spot", exact: true })).toBeVisible()
  await expect(page.getByRole("heading", { name: /your defence plan/i })).toBeVisible()
  await expectNoA11yViolations(page)
})

test("calm answers pick the type and matching stress answers show the shift", async ({ page }) => {
  await page.goto("/quiz")
  await answerAll(page, (i) => (i === 17 ? 1 : 0))
  await expect(page).toHaveURL(/\/r\/dreamer\/trust$/)
  await expect(page.getByRole("heading", { name: "The Dreamer" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Under pressure, you cling to proof" })).toBeVisible()
})

test("back keeps earlier answers and progress survives a reload", async ({ page }) => {
  await page.goto("/quiz")
  await page.getByRole("group").getByRole("button").nth(1).click()
  await page.getByRole("group").getByRole("button").nth(0).click()
  await expect(page.getByText("3 of 20")).toBeVisible()
  await page.reload()
  await expect(page.getByText("3 of 20")).toBeVisible()
  await page.getByRole("button", { name: "Back" }).click()
  await page.getByRole("button", { name: "Back" }).click()
  await expect(page.getByText("1 of 20")).toBeVisible()
  await expect(page.getByRole("group").getByRole("button").nth(1)).toHaveAttribute("aria-pressed", "true")
})

test("shared result pages render for visitors and point them to the test", async ({ page }) => {
  await page.goto("/r/empath")
  await expect(page.getByRole("heading", { name: "The Empath" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Steady under pressure" })).toBeVisible()
  await expect(page.getByText("Your blind-spot buddy")).toBeVisible()
  await expect(page.getByRole("img", { name: "Pixel dolphin" })).toBeVisible()
  await expect(page.getByRole("link", { name: /Bad influence/ })).toHaveAttribute("href", /^\/r\/[a-z-]+$/)
  const og = await page.locator('meta[property="og:image"]').getAttribute("content")
  expect(og).toContain("/r/empath/opengraph-image")
  await page.getByRole("link", { name: "Take the test yourself" }).click()
  await expect(page).toHaveURL(/\/quiz$/)
})

test("legacy links redirect and the resume is gone", async ({ page, request }) => {
  await page.goto("/results/speed-racer")
  await expect(page).toHaveURL(/\/r\/speed-racer$/)
  await page.goto("/resume")
  await expect(page).toHaveURL(/\/$/)
  expect((await request.get("/resume.pdf")).status()).toBe(404)
  expect((await request.get("/r/not-a-type")).status()).toBe(404)
})

test("the pixel art preview is dev only", async ({ request }) => {
  expect((await request.get("/dev/pixel-art")).status()).toBe(404)
})

test("share cards are real PNGs", async ({ request }) => {
  for (const path of ["/card/empath/story", "/card/empath/square", "/r/empath/opengraph-image"]) {
    const res = await request.get(path)
    expect(res.status(), path).toBe(200)
    expect(res.headers()["content-type"], path).toBe("image/png")
  }
})

test("nothing overflows horizontally", async ({ page }) => {
  for (const path of ["/", "/quiz", "/r/speed-racer/pace", "/archetypes"]) {
    await page.goto(path)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, path).toBeLessThanOrEqual(0)
  }
})
