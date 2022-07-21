import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () =>
  console.log('Server is running on port', process.env.PORT)
);
