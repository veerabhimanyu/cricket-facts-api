import express from "express";
import bodyParser from "body-parser";
import crickFactsRoute from "./routes/facts.js";
const app = express();
app.use(bodyParser.json());


const port = process.env.PORT || '5000';

app.use("/facts", crickFactsRoute);

app.get("/", (req, res) => {
  res.send("Hello from cricket facts");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
