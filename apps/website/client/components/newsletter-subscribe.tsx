import React, {useState, useRef, KeyboardEvent, FormEvent} from 'react';
import tw from 'twin.macro';
import {IoIosMailOpen} from "react-icons/io";
import {AiOutlineLoading} from "react-icons/ai";

const StyledDiv = tw.div``;

interface NewsletterFormState {
  state: 'ready' | 'loading' | 'error' | 'success';
  message: string;
  error: string;
  completed: boolean;
}

/**
 * Subscribe to the newsletter
 * @constructor
 */
const NewsletterSubscribe = () => {
  const [form, setForm] = useState<NewsletterFormState>({
    state: 'ready',
    message: '',
    error: '',
    completed: false,
  });

  const [ email, setEmail ] = useState<string | null>(null);

  const inputEl = useRef(null);

  const subscribe = async () => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: 'error',
        message: '',
        error,
        completed: false,
      })
      return;
    }

    setForm({
      state: 'success',
      message: "Yay, you're on the list!",
      error: '',
      completed: true,
    })
  };

  /**
   * Submit the form if the user presses enter
   * @param event
   */
  const handleInputKeyEvent = ( event: KeyboardEvent<HTMLInputElement> ) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      handleFormSubmit();
    }
  }

  /**
   * Handle form submission (either through enter or submit button)
   * @param e the event
   */
  const handleFormSubmit = (e?: KeyboardEvent<HTMLInputElement> | FormEvent) => {
    if(e) {
      e.preventDefault();
    }

    if(form.state === 'loading') {
      // Prevent spam
      return;
    }

    setForm({
      state: 'loading',
      message: '',
      error: '',
      completed: false,
    });

    if (!email || email.indexOf("@") <= 0) {
      setForm({
        state: 'error',
        message: '',
        error: 'Please enter a valid e-mail address',
        completed: false,
      });

      return null;
    }

    subscribe();

    return null;
  }

  return (
    <StyledDiv
      className="dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-400 p-4 rounded-md transform hover:shadow-lg dark:hover:opacity-90 transition-all duration-150 ease-in"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="text-6xl text-pink-500 mb-2"><IoIosMailOpen className="inline" /></div>

          <div className="text-xl text-gray-900 dark:text-gray-100 font-bold">
            {form.state === 'ready'? (<div><span>Subscribe to my newsletter</span></div>)
                : form.state === 'loading'? (
                  <div className="flex flex-col justify-center items-center">
                    <div className="mt-2">
                      <AiOutlineLoading className="text-3xl animate-spin" />
                    </div>
                    <div className="mt-2">
                      <span>Sending...</span>
                    </div>
                  </div>
              ): form.state === 'error'? (
                  <div className="text-gray-900 dark:text-gray-100">{form.error}</div>
              ): form.state === 'success'? (
                  <div className="text-gray-900 dark:text-gray-100">{form.message}</div>
              )
              : null
          }
          </div>
      </div>

      {(form.state === 'ready' || form.state === 'error') && (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-row justify-center gap-2">
              <input
                type="email"
                autoComplete="email"
                required
                aria-label="Email for the newsletter"
                placeholder="Your email"
                onChange={event => setEmail(event.target.value)}
                ref={inputEl}
                onKeyUp={(event) => handleInputKeyEvent(event)}

                className="px-4 py-2 border-2 border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button
                className="bg-pink-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex flex-row justify-center items-center"
              >
                <span className="text-lg">Subscribe</span><span className="ml-2 text-2xl">📧</span>
              </button>
            </div>
          </form>
        </>
      )}
    </StyledDiv>
  );
};

export default NewsletterSubscribe;
