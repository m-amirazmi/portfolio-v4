import { themeConfig } from '@/utils/theme';
import { THeader } from '@/utils/types';
import Link from 'next/link';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { ThemeSwitcher } from '@/components/general/header/theme-switcher';

export const Header: React.FC<THeader> = ({ theme, handleThemeChange }) => {
  return (
    <header className="border-b border-zinc-400/20">
      <div className="mx-auto max-w-5xl px-2 md:px-0">
        <div className="flex flex-col items-start gap-2 py-4">
          <Link className="text-xl font-bold md:text-2xl" href="/">
            💻 Amir Azmi
          </Link>
          <div className="flex w-full flex-row items-center justify-between">
            <nav className="flex items-center gap-4 text-sm md:text-base">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/connect">Let&apos;s Connect</Link>
            </nav>
            <ThemeSwitcher
              theme={theme}
              handleThemeChange={handleThemeChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
