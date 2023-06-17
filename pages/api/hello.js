// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async (req, res) => {
  if (1 == 1) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a youtube video intro upto 200?`,
    });

    res.status(200).json({ text: `${completion.data.choices[0].text}` });
  } else {
    res.status(400).json({ text: "No prompt provided." });
  }
};
