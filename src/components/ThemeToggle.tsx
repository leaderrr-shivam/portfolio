import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition');
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 400);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <span className={`block transition-transform duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0 absolute inset-0 flex items-center justify-center'}`}>
        <Sun size={18} />
      </span>
      <span className={`block transition-transform duration-300 ${theme === 'dark' ? '-rotate-90 scale-0 absolute inset-0 flex items-center justify-center' : 'rotate-0 scale-100'}`}>
        <Moon size={18} />
      </span>
    </button>
  );
};

export default ThemeToggle;
