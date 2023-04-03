import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Header } from '@/components/general/header';
import { Footer } from '@/components/general/footer';
import { TLayout } from '@/utils/types';
import { themeConfig } from '@/utils/theme';

const inter = Inter({ subsets: ['latin'] });

export const Layout: React.FC<TLayout> = ({ children }) => {
  const [theme, setTheme] = useState(themeConfig['dark']);

  const handleThemeChange = () => {
    if (theme === themeConfig['light']) setTheme(themeConfig['dark']);
    else setTheme(themeConfig['light']);
  };

  return (
    <main
      className={`${inter.className} max-w-screen flex min-h-screen flex-col`}
      data-theme={theme}
    >
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <main>{children}</main>
      <Footer />
    </main>
  );
};
