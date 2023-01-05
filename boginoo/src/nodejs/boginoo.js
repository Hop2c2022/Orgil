const express = require("express");
const { connectDatabase } = require("./database/database");
const UserRouter = require("./router/userRoute");

const port = 8001;
const app = express();
app.use(express.json());
app.use(UserRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
  });
};

startServer();
