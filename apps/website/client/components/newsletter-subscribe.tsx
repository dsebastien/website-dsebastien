import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterSubscribeForm from "@/components/newsletter-subscribe-form";
import {IoIosMailOpen} from "react-icons/io";

const StyledDiv = tw.div``;

// eslint-disable-next-line @typescript-eslint/ban-types
type StyledDivProps = PropsWithChildren<{}>;

const MAILCHIMP_URL = "https://developassion.us4.list-manage.com/subscribe/post?u=01050ad69ee1af537cf341072&amp;id=3bc7b30c1c";

/**
 * Subscribe to the newsletter
 * @constructor
 */
const NewsletterSubscribe = (_props: StyledDivProps) => {
  return (
    <StyledDiv
      className="dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-400 p-4 rounded-md transform hover:shadow-lg dark:hover:opacity-90 transition-all duration-150 ease-in"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="text-6xl text-pink-500 mb-2"><IoIosMailOpen className="inline"></IoIosMailOpen></div>
        <div className="text-xl text-gray-900 dark:text-gray-100 font-bold">Subscribe to my newsletter</div>
      </div>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={ (props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterSubscribeForm
              status={status}
              message={message}
              onValidated={ (formData) => subscribe(formData) }
            />
          );
        }}></MailchimpSubscribe>
    </StyledDiv>
  );
};

export default NewsletterSubscribe;
