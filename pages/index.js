import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Input from "../components/Input";
import Loading from "../components/Loading";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Response, setResponse] = useState("");
  const [Prompt, setPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // const send = async (p) => {
  //   setResponse("");
  //   console.log("Getting response from OpenAI...");
  //   setIsLoading(true);
  //   const response = await fetch("/api/openai", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ prompt: p }),
  //   });
  //   const data = await response.json();
  //   setIsLoading(false);
  //   setResponse(data.text);
  // };

  async function getGPT() {
    const client = axios.create({
      headers: { "Content-Type": "application/json" },
    });
    const params = {
      prompt: Prompt,
    };
    client
      .post("api/openai", JSON.stringify(params))
      .then((result) => {
        setResponse(result.data.text);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // send("what is 2+2");
  return (
    <main>
      {isLoading ? (
        <div className="z-10 absolute m-auto left-0 right-0 grid place-items-center top-0 bottom-0">
          <Loading />
        </div>
      ) : null}
      <div className="w-[100vw] h-[80vh]">
        <textarea
          className="w-full h-full text-lg p-2"
          value={Response}
          readOnly
        ></textarea>
      </div>
      <div className="w-[100vw] flex pt-4 justify-center">
        <Input
          setPrompt={setPrompt}
          getGPT={getGPT}
          setisLoading={setisLoading}
          Prompt={Prompt}
        />
      </div>
    </main>
  );
}
