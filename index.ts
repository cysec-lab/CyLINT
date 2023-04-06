import fastify from "fastify";
import * as fs from "fs";
import { createLinter, loadTextlintrc } from "textlint";
// eslint-disable-next-line import/named
import { TextlintMessage } from "@textlint/kernel";
import { getUrl } from "./ruleId2Url";

type ResT = (TextlintMessage & { url: string | undefined })[];

const server = fastify();

server.get("/", async (_, response) => {
  const html = await fs.promises.readFile("./index.html", "utf-8");
  response.type("text/html").send(html);
});

server.post<{ Body: { code: string } }>("/", async (request, response) => {
  const { code } = request.body;
  const fileName = Math.random().toString(32).substring(2);
  fs.writeFileSync(`uploads/${fileName}.tex`, code);
  console.log("textlint start!");

  const descriptor = await loadTextlintrc({ configFilePath: ".textlintrc" });
  const linter = createLinter({ descriptor });
  const lintRes = await linter.lintFiles([`uploads/${fileName}.tex`]);

  const res: ResT = lintRes[0].messages.map((message: TextlintMessage) => {
    const url = getUrl(message.ruleId).url;
    return { ...message, url };
  });
  response.type("application/json").code(200);
  response.send(JSON.stringify(res));
  fs.unlinkSync(`uploads/${fileName}.tex`);
});

server.listen({ host: "192.168.111.1", port: 1234 }, (_, address) => {
  console.log(`Server listening at ${address}`);
});
