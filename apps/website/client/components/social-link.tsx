import React from 'react';

interface SocialLinkProps {
  url: string;
  name: string;
  icon: React.ReactNode;
}

const SocialLink = ({ url, icon, name }: SocialLinkProps) => {
  return (
    <a href={url}>
      {icon}
      <span className="ml-1">{name}</span>
    </a>
  );
};

export default SocialLink;
