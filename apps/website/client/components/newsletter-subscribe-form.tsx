import { useState } from 'react';
import { decode } from 'html-entities';

import React, { PropsWithChildren, KeyboardEvent } from 'react';
import tw from 'twin.macro';

const StyledDiv = tw.div``;

type NewsletterSubscribeFormProps = PropsWithChildren<{
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: {
    EMAIL: string;
  }) => void;
}>;

/**
 * Subscribe to the newsletter
 * @constructor
 */
const NewsletterSubscribeForm = ({ status, message, onValidated }: NewsletterSubscribeFormProps) => {
  const [ error, setError ] = useState<string | null>(null);
  const [ email, setEmail ] = useState<string | null>(null);


  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError( 'Please enter a valid e-mail address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event: KeyboardEvent<HTMLInputElement> ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string | Error | null | undefined) => {
    if (!message || message instanceof Error) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <StyledDiv
      className=""
    >
      <div className="flex flex-row justify-center gap-2">
        <div className="">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="px-4 py-2 border-2 border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <button className="bg-pink-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
      <div className="mt-4">
        {status === "sending" && <div className="text-gray-900 dark:text-gray-100">Sending...</div>}
        {status === "error" || error ? (
          <div
            className="text-red-400"
            dangerouslySetInnerHTML={{ __html: (error? error: getMessage(message)!) }}
          />
        ) : null }
        {(status === "success" || status !== "error" && !error) && (
          <div className="text-gray-900 dark:text-gray-100" dangerouslySetInnerHTML={{ __html: decode(message as string) }} />
        )}
      </div>
    </StyledDiv>
  );
};

export default NewsletterSubscribeForm;
