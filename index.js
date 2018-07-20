const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const config = require('./config/config');
const { morganLogger } = require('./config/logger');

let app = express();

app.use(cors());
app.use(morganLogger);
app.use(helmet());
app.use(compression());
require('./server/app')(app);

app.listen(config.app.port, () => {
  console.log(`Express server running on port ${config.app.port}`);
});