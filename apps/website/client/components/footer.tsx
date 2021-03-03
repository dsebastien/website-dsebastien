import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialLink from './social-link';
import tw from 'twin.macro';

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
            ariaLabelText="Go to my Twitter profile"
            titleText="Go to my Twitter profile"
            icon={<FaTwitter className="inline hover:text-blue-500" />}
          />
        </li>
        <li>
          <SocialLink
            url="https://www.linkedin.com/in/sebastiend"
            name="LinkedIn"
            hideText={true}
            ariaLabelText="Go to my LinkedIn profile"
            titleText="Go to my LinkedIn profile"
            icon={
              <FaLinkedin className="inline hover:text-blue-500 hover:bg-white" />
            }
          />
        </li>
        <li>
          <SocialLink
            url="https://github.com/dsebastien"
            name="GitHub"
            hideText={true}
            ariaLabelText="Go to my GitHub profile"
            titleText="Go to my GitHub profile"
            icon={<FaGithub className="inline hover:text-black" />}
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
