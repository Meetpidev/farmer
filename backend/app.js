const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hellow");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})