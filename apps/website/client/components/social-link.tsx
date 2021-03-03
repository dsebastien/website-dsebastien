import React from 'react';
import tw from 'twin.macro';

const StyledLink = tw.a``;

interface SocialLinkProps {
  url: string;
  name: string;
  icon: React.ReactNode;
  ariaLabelText: string;
  hideText?: boolean;
}

const SocialLink = ({
  url,
  icon,
  name,
  ariaLabelText,
  hideText,
}: SocialLinkProps) => {
  return (
    <StyledLink href={url} aria-label={ariaLabelText}>
      {icon}
      {!hideText && <span className="ml-1">{name}</span>}
    </StyledLink>
  );
};

export default SocialLink;
