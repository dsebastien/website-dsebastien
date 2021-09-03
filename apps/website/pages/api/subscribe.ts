import { NextApiRequest, NextApiResponse } from 'next';

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
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    if(!AUDIENCE_ID) {
      throw new Error("The following environment variable is mandatory: [MAILCHIMP_AUDIENCE_ID]");
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    if(!API_KEY) {
      throw new Error("The following environment variable is mandatory: [MAILCHIMP_API_KEY]");
    }

    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

    const responseAsJson = await response.json();

    console.log("response: ", responseAsJson);

    if (response.status >= 400) {
      let errorMessage = GENERIC_ERROR;

      if(responseAsJson.title && responseAsJson.title === 'Member Exists') {
        errorMessage = "You've already subscribed to my newsletter!";
      }

      return res.status(400).json({
        error: errorMessage,
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log("Error while subscribing a new user to the newsletter: ", JSON.stringify(error, null, 2));
    return res.status(500).json({ error: GENERIC_ERROR });
  }
};
