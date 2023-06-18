// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAIKEY,
});
const openai = new OpenAIApi(configuration);

export default async (req, res) => {
  if (1 == 1) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${req.body.prompt}` }],
      });
      return completion.data.choices[0].message.content;
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).json({ text: "No prompt provided." });
  }
};

// export default async (req, res) => {
//   if (1 == 1) {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `write a youtube video intro upto 200?`,
//     });

//     res.status(200).json({ text: `${completion.data.choices[0].text}` });
//   } else {
//     res.status(400).json({ text: "No prompt provided." });
//   }
// };
