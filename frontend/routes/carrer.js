const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("hello routes");
});

router.get("/:name", (req, res) => {
    console.log(`${req.params.name}`);

    // rendering
    test = req.params.name;

    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>test page : ${test}</title>
        </head>
        <body>
            <h1>test입니다 현재 페이지는 ${test}입니다.</h1>
        </body>
    </html>
    `;
    res.send(output);
});
module.exports = router;