import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site/site-header"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import "./globals.css"

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const heading = Bricolage_Grotesque({ variable: "--font-heading", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME}: what's your blind spot?`, template: `%s | ${SITE_NAME}` },
  description:
    "A 5-minute personality test that shows how you act under pressure, and which scams are built for your blind spot.",
  openGraph: { siteName: SITE_NAME, type: "website" },
}

export const viewport: Viewport = {
  themeColor: "#FBF3E4",
  colorScheme: "light",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
