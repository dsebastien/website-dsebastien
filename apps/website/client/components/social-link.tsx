import React from 'react';

interface SocialLinkProps {
  url: string;
  name: string;
  icon: React.ReactNode;
  hideText?: boolean;
}

const SocialLink = ({ url, icon, name, hideText }: SocialLinkProps) => {
  return (
    <a href={url}>
      {icon}
      {!hideText && <span className="ml-1">{name}</span>}
    </a>
  );
};

export default SocialLink;
