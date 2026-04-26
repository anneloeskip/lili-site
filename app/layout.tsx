import { Inter } from "next/font/google"

import type { Metadata } from "next"

import { NavBar } from "@/components/NavBar"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LILI",
  description: "A library of intervention studies to reduce feelings of loneliness and social isolation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "flex flex-col min-h-svh")}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
