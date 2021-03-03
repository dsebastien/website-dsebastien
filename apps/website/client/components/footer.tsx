import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialLink from './social-link';
import tw from "twin.macro";

const StyledList = tw.ul``;

const Footer = () => {
  return (
    <>
      <StyledList tw="flex justify-center space-x-2">
        <li>
          <SocialLink
            url="https://twitter.com/dsebastien"
            name="Twitter"
            hideText={true}
            icon={<FaTwitter className="inline" />}
          />
        </li>
        <li>
          <SocialLink
            url="https://www.linkedin.com/in/sebastiend"
            name="LinkedIn"
            hideText={true}
            icon={<FaLinkedin className="inline" />}
          />
        </li>
        <li>
          <SocialLink
            url="https://github.com/dsebastien"
            name="GitHub"
            hideText={true}
            icon={<FaGithub className="inline" />}
          />
        </li>
      </StyledList>
      <p className="mt-6 text-center text-sm mb-12">
        Copyright © Dubois Sébastien
      </p>
    </>
  );
};

export default Footer;
