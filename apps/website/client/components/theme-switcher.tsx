import { useTheme } from 'next-themes';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import tw from "twin.macro";

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
        className="hover:text-purple-100"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </StyledButton>
    </>
  );
};

export default ThemeSwitcher;
