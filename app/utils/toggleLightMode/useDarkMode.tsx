import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage === 'undefined') {
      // localStorage is not available, so use a default theme
      return { theme: 'light', toggleTheme: () => {} };
    }
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    );
  });

  useEffect(() => {
    document.documentElement.classList.add(theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return { theme, toggleTheme };
}
