const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const buildpath=path.join(__dirname,"../client/build")
const datapath = path.join(__dirname, "./data");

// Serve static files from the React app
app.use(express.static(buildpath));





app.use(express.json());

app.get("/mytest", (req, res) => {

    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");

    // setTimeout(()=>{
    //     res.sendFile(path.join(datapath, "mainContent.json"));
    // },1000)
    res.sendFile(path.join(datapath, "mainContent.json"));
})


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*",(req,res)=>{
    res.sendFile(path.join(buildpath,"index.html"));
});


app.listen(port, () => console.log(`Server is up on port ${port}`));