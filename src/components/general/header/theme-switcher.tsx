import { themeConfig } from '@/utils/theme';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { THeader } from '@/utils/types';

export const ThemeSwitcher: React.FC<THeader> = ({
  theme,
  handleThemeChange,
}) => {
  return (
    <button
      className={`${
        theme === themeConfig['light']
          ? 'text-zinc-400 hover:text-zinc-800'
          : 'hover:text-yellow-400'
      } text-2xl transition-colors duration-100 ease-linear`}
      onClick={handleThemeChange}
    >
      {theme === themeConfig['light'] ? <HiMoon /> : <HiSun />}
    </button>
  );
};
