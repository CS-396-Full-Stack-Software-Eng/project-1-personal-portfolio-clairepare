// components/ThemeToggle.jsx
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className='flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white' onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;

