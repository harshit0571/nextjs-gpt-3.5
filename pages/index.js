import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Response, setResponse] = useState("");
  const [IsLoading, setIsLoading] = useState("");
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

  async function getGPT(p) {
    const client = axios.create({
      headers: { "Content-Type": "application/json" },
    });
    const params = {
      prompt: p,
    };
    client
      .post("api/openai", JSON.stringify(params))
      .then((result) => {
        setResponse(result.data.text);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // send("what is 2+2");
  useEffect(() => {
    getGPT("write a 200 words essay on airpolution");
  }, []);

  return (
    <main>
      <div>{Response}</div>
    </main>
  );
}
