import express from "express";
import cors from "cors";
import { genreateID,getAllFilePaths } from "./utils";
import simpleGit from "simple-git";
import * as path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const { repoUrl } = req.body;

  const id = genreateID();

  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

  const filePaths=getAllFilePaths( path.join(__dirname, `output/${id}`));
  console.log(filePaths);
  res.send({ id });
});

app.listen(3000);
