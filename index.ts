import fastify from "fastify";
import * as fs from "fs";
import { execSync } from "child_process";

const server = fastify();

server.get("/", async (_, response) => {
  const html = await fs.promises.readFile("./index.html", "utf-8");
  response.type("text/html").send(html);
});

server.post<{ Body: { code: string } }>("/", async (request, response) => {
  const { code } = request.body;
  console.log(code);
  const fileName = Math.random().toString(32).substring(2);
  fs.writeFileSync(`uploads/${fileName}.tex`, code);
  console.log("textlint start!");
  try {
    execSync(
      `yarn textlint uploads/${fileName}.tex > uploads/${fileName}.out`
    );
  } catch (e) {}

  const stdout = fs
    .readFileSync(`uploads/${fileName}.out`, "utf-8")
    .split("\n")
    .slice(3)
    .join("\n");
  const res = { value: stdout };
  response.send(JSON.stringify(res));

  fs.unlinkSync(`uploads/${fileName}.tex`);
  fs.unlinkSync(`uploads/${fileName}.out`);
});

server.listen({ host: "192.168.100.4", port: 1234 }, (_, address) => {
  console.log(`Server listening at ${address}`);
});
