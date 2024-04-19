import RootLayout from './layout';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Header from "./components/Header"
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  //const { theme, setTheme } = useContext(ThemeContext);

  return (
    <RootLayout>
      <Header />
      <h1>Welcome to My Portfolio</h1>
      <ThemeToggle /*onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> */>
        Toggle Theme
      </ThemeToggle>
    </RootLayout>
  );
}