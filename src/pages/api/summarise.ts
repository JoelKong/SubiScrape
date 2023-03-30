import * as cheerio from "cheerio";
import { Readability } from "@mozilla/readability";
import axios from "axios";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function handler(req: any, res: any) {
  let mainContent;
  const { inputLink } = req.body;

  if (!inputLink) {
    return new Response("Input Link Not Found!", { status: 400 });
  }

  try {
    await axios.get(inputLink).then((response) => {
      const $ = cheerio.load(response.data);
      const doc = new JSDOM(response.data, { inputLink }).window.document;
      const article = new Readability(doc).parse();
      mainContent = article!.content.replace(/<[^>]*>?/gm, "");
    });
  } catch (error) {
    return res.status(200).json({ result: "Try another link!" });
  }

  return res.status(200).json({ mainContent });
}

export default handler;
