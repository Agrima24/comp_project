const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const cors = require('cors')
const router = require('./routers/mainRouter')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}))


app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle database connection

db.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to database!');

  // Your database interaction goes here
  // For example, you can execute a query like this:
  client.query('SELECT VERSION()', (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('PostgreSQL version:', result.rows[0].version);
    }

    // Release the client back to the pool
    release();
  });
});
