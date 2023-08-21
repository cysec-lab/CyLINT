import * as functions from "firebase-functions/v2";
import * as fs from "fs";
import { createLinter, loadTextlintrc } from "textlint";
import { TextlintMessage } from "@textlint/kernel";
import { getUrl } from "./ruleId2Url";

type ResT = (TextlintMessage & { url: string | undefined })[];

export const lint = functions.https.onRequest(
  {
    region: "asia-northeast1",
    memory: "2GiB",
    timeoutSeconds: 15,
    maxInstances: 10,
  },
  async (request: functions.https.Request, response) => {
    const { code } = request.body;
    const lang = request.body?.lang ?? "ja";

    if (code === undefined) {
      response.type("application/json").status(400);
      response.send(JSON.stringify({ error: "code is undefined" }));
      return;
    }

    if (lang !== "en" && lang !== "ja") {
      response.type("application/json").status(400);
      response.send(JSON.stringify({ error: "lang is allowed 'en' or 'ja'" }));
      return;
    }

    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }

    const fileName = Math.random().toString(32).substring(2);
    fs.writeFileSync(`uploads/${fileName}.tex`, code);

    console.log(`textlint start!: ${fileName}`);
    const configFilePath = lang === "ja" ? ".textlintrc" : ".textlintrc.en";
    const descriptor = await loadTextlintrc({ configFilePath });
    const linter = createLinter({ descriptor });
    const lintRes = await linter.lintFiles([`uploads/${fileName}.tex`]);
    console.log(`textlint finish!: ${fileName}`);

    if (lintRes.length === 0) {
      response.type("application/json").status(200);
      response.send(JSON.stringify([]));
    } else {
      const res: ResT = lintRes[0].messages.map((message: TextlintMessage) => {
        const url = getUrl(message.ruleId).url;
        return { ...message, url };
      });

      response.type("application/json").status(200);
      response.send(JSON.stringify(res));
    }
    fs.unlink(`uploads/${fileName}.tex`, () => {});
  }
);
