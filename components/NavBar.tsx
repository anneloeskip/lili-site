"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/data-explorer", label: "Data explorer" },
  { href: "/meta-analysis", label: "Meta-analysis" },
  { href: "/faq", label: "FAQ" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/LILI_logo.png"
            alt="LILI"
            width={72}
            height={72}
            priority
          />
          <span className="text-xl font-semibold tracking-tight">LILI</span>
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-foreground font-medium text-sm"
                    : "text-muted-foreground hover:text-foreground transition-colors text-sm"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
