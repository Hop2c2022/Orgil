const express = require("express");
const { connectDatabase } = require("./database/database");
const UserRouter = require("./router/userRoute");
const cors = require("cors");

const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
  });
};

startServer();
