import { NextApiRequest, NextApiResponse } from 'next';
import {NEWSLETTER_MUST_VALIDATE_EMAIL} from "../../constants";

const GENERIC_ERROR = "There was an error subscribing you to the newsletter. Send me an email at seb@dsebastien.net and I'll add you to the list.";

/**
 * Subscribe to my newsletter
 * Reference: https://github.com/leerob/leerob.io/blob/bfbd33a822fbcbbafd4027aa45884446f6f8ff3c/pages/api/subscribe.js
 * @param req
 * @param res
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // TODO validate email

  console.log("New newsletter subscriber to add: ", email);

  try {
    const API_KEY = process.env.REVUE_API_KEY;
    if(!API_KEY) {
      throw new Error("The following environment variable is mandatory: [REVUE_API_KEY]");
    }

    const response = await fetch(
      `https://www.getrevue.co/api/v2/subscribers`,

      {
        method: 'POST',
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        // Reference: https://www.getrevue.co/api#post-/v2/subscribers
        body: JSON.stringify({
          email,
          first_name: '',
          last_name: '',
          double_opt_in: true,
        }),
      }
    );

    const responseAsJson = await response.json();

    const responseStatus = response.status;

    console.log("Response status code: ", responseStatus);
    console.log("Response: ", responseAsJson);

    if(responseStatus !== 200) {
      console.log("Response status not 200: ", responseStatus);
      const mustValidateEmail = responseStatus === 400 && responseAsJson.error && responseAsJson.error.email && responseAsJson.error.email[0] === 'This email address was not confirmed yet.'
      if(mustValidateEmail) {
        return res.status(500).json({ error: NEWSLETTER_MUST_VALIDATE_EMAIL });
      }
      // Generic error
      return res.status(500).json({ error: responseAsJson.error.email[0] });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log("Error while subscribing a new user to the newsletter: ", JSON.stringify(error, null, 2));
    return res.status(500).json({ error: GENERIC_ERROR });
  }
};
