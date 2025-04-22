
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700 tracking-tight">
          <span role="img" aria-label="hospital">🏥</span> 
          <span className="tracking-wide">Personalized Health Assistant</span>
        </a>
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-blue-700 font-semibold px-3 py-1 rounded transition-colors duration-200"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
