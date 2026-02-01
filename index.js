import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
// 1. Import express and axios

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Home route to fetch and display a random secret
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const secretData = response.data;
    res.render(__dirname + '/views/index.ejs', {
        secret: secretData.secret,
        username: secretData.username
    });
  } catch (error) {
    res.status(500).send('Error fetching secret');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
