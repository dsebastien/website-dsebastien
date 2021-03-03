import React from 'react';
import tw from 'twin.macro';

const StyledLink = tw.a``;

interface SocialLinkProps {
  url: string;
  name: string;
  icon: React.ReactNode;
  ariaLabelText: string;
  titleText?: string;
  hideText?: boolean;
}

const SocialLink = ({
  url,
  icon,
  name,
  ariaLabelText,
  titleText = '',
  hideText,
}: SocialLinkProps) => {
  return (
    <StyledLink href={url} aria-label={ariaLabelText} title={titleText}>
      {icon}
      {!hideText && (
        <span className="ml-1 hover:text-blue-400 hover:dark:text-blue-100">
          {name}
        </span>
      )}
    </StyledLink>
  );
};

export default SocialLink;
