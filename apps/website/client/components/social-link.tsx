import React from 'react';
import tw from "twin.macro";

const StyledLink = tw.a``;

interface SocialLinkProps {
  url: string;
  name: string;
  icon: React.ReactNode;
  hideText?: boolean;
}

const SocialLink = ({ url, icon, name, hideText }: SocialLinkProps) => {
  return (
    <StyledLink href={url}>
      {icon}
      {!hideText && <span className="ml-1">{name}</span>}
    </StyledLink>
  );
};

export default SocialLink;
