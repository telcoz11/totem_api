const express = require('express');
const optionsRoute = require('./routes/optionsRoutes');

const app = express();
const port = 3000; 

app.use('/api', optionsRoute);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
