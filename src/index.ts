import express from "express";
import cors from "cors";
import { genreateID, getAllFilePaths } from "./utils";
import simpleGit from "simple-git";
import * as path from "path";
import { uploadFile } from "./aws";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const { repoUrl } = req.body;

  const id = genreateID();

  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

  const filePaths = getAllFilePaths(path.join(__dirname, `output/${id}`));

  filePaths.forEach(async (file) => {
    await uploadFile(file.slice(__dirname.length + 1), file);
  });

  res.send({ id });
});

app.listen(3000);
