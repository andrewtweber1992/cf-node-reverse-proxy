'use strict';

const express = require('express');

let app = express();

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on ${port}...`);
})
