// import {
//   createParser,
//   ParsedEvent,
//   ReconnectInterval,
// } from "eventsource-parser";
import * as cheerio from "cheerio";
import { Readability } from "@mozilla/readability";
import axios from "axios";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// type ChatGPTAgent = "user" | "system";

// interface ChatGPTMessage {
//   role: ChatGPTAgent;
//   content: string;
// }

// interface OpenAIStreamPayload {
//   model: string;
//   messages: ChatGPTMessage[];
//   temperature: number;
//   top_p: number;
//   frequency_penalty: number;
//   presence_penalty: number;
//   max_tokens: number;
//   stream: boolean;
//   n: number;
// }

// // export const config = {
// //   runtime: "edge",
// // };

// async function OpenAIStream(payload: OpenAIStreamPayload) {
//   const encoder = new TextEncoder();
//   const decoder = new TextDecoder();

//   let counter = 0;

//   const res = await fetch("https://api.openai.com/v1/chat/completions", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
//     },
//     method: "POST",
//     body: JSON.stringify(payload),
//   });

//   const stream = new ReadableStream({
//     async start(controller) {
//       function onParse(event: ParsedEvent | ReconnectInterval) {
//         if (event.type === "event") {
//           const data = event.data;
//           if (data === "[DONE]") {
//             controller.close();
//             return;
//           }
//           try {
//             const json = JSON.parse(data);
//             const text = json.choices[0].delta?.content || "";
//             if (counter < 2 && (text.match(/\n/) || []).length) {
//               return;
//             }
//             const queue = encoder.encode(text);
//             controller.enqueue(queue);
//             counter++;
//           } catch (e) {
//             controller.error(e);
//           }
//         }
//       }

//       const parser = createParser(onParse);
//       for await (const chunk of res.body as any) {
//         parser.feed(decoder.decode(chunk));
//       }
//     },
//   });

//   return stream;
// }

async function handler(req: any) {
  let mainContent;
  if (req.method === "POST") {
    const { inputLink } = req.body;

    if (!inputLink) {
      return new Response("Input Link Not Found!", { status: 400 });
    }

    await axios.get(inputLink).then((response) => {
      const $ = cheerio.load(response.data);
      const doc = new JSDOM(response.data, { inputLink }).window.document;
      const article = new Readability(doc).parse();
      mainContent = article!.content.replace(/<[^>]*>?/gm, "");
    });

    const generate = await axios.post("http://localhost:3000/api/generate", {
      mainContent,
    });

    console.log(generate.data);

    //    await fetch("http://localhost:3000/api/generate", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ mainContent }),
    //     })

    // const payload: OpenAIStreamPayload = {
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     {
    //       role: "system",
    //       content: "You are an AI whose main role is to summarise text.",
    //     },
    //     {
    //       role: "user",
    //       content: `Summarise this briefly: ${mainContent}`,
    //     },
    //   ],
    //   temperature: 0,
    //   top_p: 1,
    //   frequency_penalty: 2,
    //   presence_penalty: -2,
    //   max_tokens: 300,
    //   stream: true,
    //   n: 1,
    // };

    // const stream = await OpenAIStream(payload);
    // return new Response(stream);
  }
}

export default handler;
