const connectToMongo = require("./server");
const express = require("express");

const app = express();
app.use(express.json());
const port = 5000;
connectToMongo();

//routes
app.use("/api/note", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
