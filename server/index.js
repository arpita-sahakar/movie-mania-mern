import express from "express";
import mongoose from "mongoose";
// import userRoutes from "./routes.js";



// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}




// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://mongodbuser:mongodbpassword@cluster0.dbv79.mongodb.net/userCollection?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

// to test if its working on browser
app.get("/api/config", (req, res) => {
    res.send("connected successfully..")
});

// app.use("/users", userRoutes)

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});