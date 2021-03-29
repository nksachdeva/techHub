const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const datapath = path.join(__dirname, "../data");



app.use(express.json());

app.get("/mytest", (req, res) => {

    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(datapath, "mainContent.json"));
})


app.listen(port, () => console.log(`Server is up on port ${port}`));