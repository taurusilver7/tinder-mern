import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8001;

// const connection_url = `mongodb+srv://admin:KrbyjopPkRSvuNwa@cluster0.em8yw.mongodb.net/tinderDB?retryWrites=true&w=majority`;

// middlewares
app.use(express.json());
app.use(Cors());

// db Config
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log(`Database has been connected to the server on port: ${port}`);
});

// API end points
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the chat!!");
});

// API endpoint to send the data created at front-end cards to the database conv into db models.
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

// API end-point to get the data from the database.
app.get("/tinder/cards", (req, res) => {
  // collect everything from the database created so far.
  Cards.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listeners
app.listen(port, () => console.log(`listening on port: ${port}`));
