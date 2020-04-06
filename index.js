const express = require('express');
const app = express();

app.get('*', (req, res) =>
  res.redirect(
    301,
    `https://${req.hostname.replace('www.', '')}${req.originalUrl}`,
  ),
);

app.listen(process.env.PORT);
