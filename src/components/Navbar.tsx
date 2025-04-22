
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
    <nav className="w-full sticky top-0 z-40 bg-gradient-to-r from-[#e7e1fa]/90 via-[#f4f1fe]/90 to-[#e8f3fc]/90 backdrop-blur-md shadow-lg">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-violet-800 tracking-tight hover-scale drop-shadow">
          <span role="img" aria-label="hospital">🏥</span>
          <span className="tracking-wide">Personalized Health Assistant</span>
        </Link>
        <ul className="hidden md:flex gap-5 items-center">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "px-4 py-1.5 rounded-xl transition-all text-gray-700 font-semibold hover:text-violet-800 hover:bg-purple-100/80 hover:drop-shadow",
                  location.pathname === item.href && "bg-gradient-to-r from-purple-200 to-blue-100 text-violet-900 font-black shadow"
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
