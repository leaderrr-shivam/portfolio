import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Credentials', id: 'credentials' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback((id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20'
            : 'bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-display font-bold text-xl tracking-tight group relative z-10">
              <span className="text-gradient-warm group-hover:opacity-80 transition-opacity">S</span>
              <span className="text-foreground">hivam</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link text-sm font-medium tracking-wide bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                className="md:hidden p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 relative z-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-background border-b border-border/50 shadow-xl shadow-background/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => { handleNavClick(item.id); setIsMobileMenuOpen(false); }}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3.5 px-4 rounded-xl font-medium bg-transparent border-none cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
