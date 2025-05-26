import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "./components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll to anchor on hash change
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 mx-auto to-orange-100 dark:from-neutral-950 dark:to-neutral-900"
      style={{
        scrollBehavior: "smooth",
        backgroundColor: darkMode ? "#0a0a0a" : undefined,
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full flex items-center px-4 justify-center border-b border-amber-200 bg-amber-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/60 dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="container flex h-14 items-center justify-center relative">
          <div className="flex items-center absolute left-0">
            <Link
              className="mr-6 flex items-center space-x-2"
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="font-bold">Habib Elias</span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Dark Mode Toggle */}
          <div className="absolute right-12 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 flex transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`bg-amber-50 dark:bg-neutral-950 w-64 h-full shadow-lg flex flex-col transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-amber-200 dark:border-neutral-800">
            <span className="font-bold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-2 px-3 rounded hover:bg-amber-100 dark:hover:bg-neutral-800 transition-colors font-medium"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Dark Mode Toggle in Drawer */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle dark mode"
              className="mt-4 self-start"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </nav>
        </div>
        {/* Click outside to close */}
        <div
          className="flex-1"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        />
      </div>
      {/* Main Content */}
      <main className="flex-1 px-10 bg-transparent">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="border-t flex items-center justify-center border-amber-200 py-8 bg-amber-50/30 dark:border-neutral-800 dark:bg-neutral-950/30">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2024 Habib Elias. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
