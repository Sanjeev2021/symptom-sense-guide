
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700 tracking-tight hover-scale">
          <span role="img" aria-label="hospital">🏥</span>
          <span className="tracking-wide">Personalized Health Assistant</span>
        </Link>
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "px-3 py-1 rounded transition-colors text-gray-700 font-semibold hover:text-blue-700",
                  location.pathname === item.href && "bg-blue-50 text-blue-700 font-bold shadow"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
