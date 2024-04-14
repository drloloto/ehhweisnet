import { read, utils } from "xlsx";
import { knex } from "knex";
import { readdir } from "node:fs/promises";
const mKnex = knex({ client: "mysql" });
const files = await readdir(import.meta.dir + "/sourcefiles");

for await (const fileName of files) {
  if (!fileName.endsWith(".xlsx")) continue;
  const file = Bun.file("sourcefiles/" + fileName);
  const b64 = await file.arrayBuffer();

  const workbook = read(b64, { type: "base64" });

  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const toJson = utils.sheet_to_json(worksheet);

  await Bun.write(
    `export/${fileName.replace(".xlsx", "")}.json`,
    JSON.stringify(toJson)
  );

  const query = mKnex("targetTable")
    .insert(toJson)
    .into("targetTable")
    .toString();
  const sqlFileResult = query + ";" + "\n";

  await Bun.write(`export/${fileName.replace(".xlsx", "")}.sql`, sqlFileResult);
}
