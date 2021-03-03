import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

type ScrollToTopProps = React.HTMLAttributes<HTMLButtonElement> & {
  scrollingElement?: HTMLElement | undefined;
  top?: number;
  smooth?: boolean;
  icon?: React.ReactNode;
  ariaLabelText?: string;
};

/**
 * Scroll the window to top, or the scrolling element if provided
 * @param smooth whether to scroll smoothly or not
 * @param scrollingElement the element to scroll. If not defined, then window is used
 */
function scrollToTop(
  smooth = false,
  scrollingElement: HTMLElement | undefined
) {
  if (!scrollingElement) {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    document.documentElement.scrollTop = 0;
  } else {
    if (smooth) {
      scrollingElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    scrollingElement.scrollTop = 0;
  }
}

/**
 * Component that scrolls to the top of the page
 * Appears when scroll is past the value of top (default: 20)
 * @param scrollingElement the element to watch for scroll events. Defaults to window
 * @param top How many pixels before the scroll to top element appears on screen
 * @param className Custom className value for the scroll-to-top button
 * @param icon The icon to show (should ideally have w-full h-full classes applied)
 * @param ariaLabelText The aria label to use
 * @param smooth enable smooth scrolling (default = false)
 * @constructor
 */
const ScrollToTop = ({
  scrollingElement,
  top = 20,
  className = 'scroll-to-top',
  icon,
  ariaLabelText = 'Scroll to top',
  smooth = false,
}: ScrollToTopProps) => {
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    if (!scrollingElement) {
      setVisible(document.documentElement.scrollTop > top);
    } else {
      setVisible(scrollingElement.scrollTop > top);
    }
  };
  useEffect(() => {
    if (!scrollingElement) {
      document.addEventListener('scroll', onScroll);
    } else {
      scrollingElement.addEventListener('scroll', onScroll);
    }

    // Remove listener on unmount
    return () => {
      if (!scrollingElement) {
        document.removeEventListener('scroll', onScroll);
      } else {
        scrollingElement.removeEventListener('scroll', onScroll);
      }
    };
  });

  return (
    <>
      {visible && (
        <button
          className={className}
          onClick={() => scrollToTop(smooth, scrollingElement)}
          aria-label={ariaLabelText}
        >
          {icon || <FaArrowUp />}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
