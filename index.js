const mongoose = require('mongoose');
const customers = require('./routes/customers');
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
//this connect returns a promise
// var uri="mongodb://localhost/focusDB"
var uri="mongodb+srv://focusLearnerAtlasDB:focusLearnerAtlasDB@cluster-focuslearneratl.pszd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB..'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));