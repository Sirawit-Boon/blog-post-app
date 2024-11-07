import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

const getData = {
  data: {
    name: "john",
    age: 20,
  },
};
app.get("/profiles", (req, res) => {
  return res.json(getData);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
