import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialLink from './social-link';

const Footer = () => {
  return (
    <>
      <ul className="flex justify-center space-x-2">
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
      </ul>
      <p className="mt-6 text-center text-sm mb-12">
        Copyright © Dubois Sébastien
      </p>
    </>
  );
};

export default Footer;
