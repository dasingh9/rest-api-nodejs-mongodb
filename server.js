require("dotenv").config();
const express = require("express");
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes')

const app = express();

// parse requests of content-type - application / json
app.use(express.json());

app.use('/api/users', userRoutes);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});