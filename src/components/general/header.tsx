import { THeader } from '@/utils/types';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/general/header/theme-switcher';

export const Header: React.FC<THeader> = ({ theme, handleThemeChange }) => {
  return (
    <header>
      <div className="mx-auto max-w-5xl px-3">
        <div className="flex flex-col items-start gap-3 py-4">
          <Link className="text-xl font-bold md:text-2xl" href="/">
            💻 Amir Azmi
          </Link>
          <div className="flex w-full flex-row items-center justify-between">
            <nav className="flex items-center gap-4 text-base">
              <Link className="hover:text-zinc-300/70" href="/about">
                About
              </Link>
              <Link className="hover:text-zinc-300/70" href="/projects">
                Projects
              </Link>
              <Link className="hover:text-zinc-300/70" href="/blog">
                Blog
              </Link>
              <Link className="hover:text-zinc-300/70" href="/connect">
                Let&apos;s Connect
              </Link>
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
