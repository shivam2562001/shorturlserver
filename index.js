const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const urlroutes = require("./routes/url");
const geturlroutes = require("./routes/geturl");
const cors = require('cors');
const app = express();



//env middleware
dotenv.config({ path: "./config.env" });


//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((con) => {
    console.log("Database connected successfully");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


//Routes
app.use(urlroutes);
app.use('/',geturlroutes);

//listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
