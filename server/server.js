const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});