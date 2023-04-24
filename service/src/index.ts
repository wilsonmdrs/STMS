import express, { Request, Response } from "express";
import jsonfile from "jsonfile";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();
const port = 5000;
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(express.json());
app.use(cors(corsOptions));

const tagFile = "./src/tags.json";

interface Tag {
  id: string;
  label: string;
}

interface Data {
  totalData: number;
  tags: Tag[];
  recent: Tag[];
}

function generateId(): string {
  const timestamp = Date.now();
  const randomChars = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  const id = `${timestamp}${randomChars}`;
  return id;
}

function setInitialData() {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;

    const tags: Tag[] = Array.from(Array(100)).map((_, i) => ({
      id: generateId(),
      label: faker.random.word().toUpperCase(),
    }));
    data.tags = tags;
    data.totalData = tags.length;
    data.recent = [];

    jsonfile.writeFile(tagFile, data);
  });
}
setInitialData();

app.get("/recent", (req: Request, res: Response) => {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;
    const result = data.recent;
    res.send(result);
  });
});

app.get("/tag", (req: Request, res: Response) => {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;
    const queryLabel = String(req.query.label);
    const page = Number(req.query.page) || 1; // default to page 1
    const limit = Number(req.query.limit) || 10; // default to 10 items per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (!queryLabel) {
      jsonfile.readFile(tagFile, (err, data: Data) => {
        if (err) throw err;
        const results = data.tags.slice(startIndex, endIndex);
        const totalPages = Math.ceil(data.tags.length / limit);
        res.send({
          totalData: data.tags.length,
          page,
          limit,
          totalPages,
          tags: results,
        });
      });
    } else {
      const tags = data.tags.filter((tag) => tag.label.includes(queryLabel));
      const results = tags.slice(startIndex, endIndex);
      const totalPages = Math.ceil(tags.length / limit);
      res.send({
        totalData: tags.length,
        page,
        totalPages,
        limit,
        tags: results,
      });
    }
  });
});

app.post("/tag", (req: Request, res: Response) => {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;

    const isDuplicated = data.tags.some((tag) => tag.label === req.body.label);

    if (isDuplicated) {
      res
        .status(409)
        .send(`the tag "${req.body.label}" already exist. Try another one!`);
    } else {
      const newTag: Tag = {
        id: generateId(),
        label: req.body.label,
      };
      data.tags.push(newTag);
      data.recent.unshift(newTag);
      data.totalData = data.totalData + 1;
      if (data.recent.length > 15) data.recent.pop();

      jsonfile.writeFile(tagFile, data, (err) => {
        if (err) throw err;
        res.send("Tag added successfully");
      });
    }
  });
});

app.put("/tag/:id", (req: Request, res: Response) => {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;

    const tagId = String(req.params.id);
    const tag = data.tags.find((p) => p.id === tagId);
    const recentTag = data.recent.find((p) => p.id === tagId);

    if (recentTag) {
      recentTag.label = req.body.label;
    }

    if (!tag) {
      res.status(404).send("Tag not found");
    } else {
      tag.label = req.body.label;
      jsonfile.writeFile(tagFile, data, (err) => {
        if (err) throw err;
        res.send("Tag updated successfully");
      });
    }
  });
});

app.delete("/tag/:id", (req: Request, res: Response) => {
  jsonfile.readFile(tagFile, (err, data: Data) => {
    if (err) throw err;

    const tagId = String(req.params.id);
    const index = data.tags.findIndex((p) => p.id === tagId);
    const recents = data.recent.filter((p) => p.id !== tagId);
    if (index === -1) {
      res.status(404).send("Tag not found");
    } else {
      data.tags.splice(index, 1);
      data.recent = recents;
      data.totalData = data.totalData - 1;

      jsonfile.writeFile(tagFile, data, (err) => {
        if (err) throw err;
        res.send("Tag deleted successfully");
      });
    }
  });
});

// Start the server

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
