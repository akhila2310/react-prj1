const express = require('express');
const PORT=process.env.PORT;
require('dotenv').config();

const app = express();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
