const express = require("express");
const cors = require("cors");

const connectDatabase = require("./Dbconnection/conn");
connectDatabase();
const App = express();
const port = process.env.PORT || 2001;
const routers = require("./routes/userrouter");

// Enable CORS before setting up routes
App.use(cors());

App.use(express.json());
App.use(routers);

App.listen(port, () => {
  console.log("Server is running on port " + port);
});
