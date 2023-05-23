const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/urls");
mongoose.connect(
  "mongodb+srv://TsaamAdmin:tsaam2023@cluster0.mpjrd.mongodb.net/urls"
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("connection in orde");
});
