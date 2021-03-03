import { useTheme } from 'next-themes';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import tw from 'twin.macro';

const StyledButton = tw.button``;

/**
 * Switch between light and dark mode
 * @constructor
 */
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/*The current theme is: {theme}*/}
      <StyledButton
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <FaSun className="hover:text-yellow-500" />
        ) : (
          <FaMoon className="hover:text-gray-400" />
        )}
      </StyledButton>
    </>
  );
};

export default ThemeSwitcher;
