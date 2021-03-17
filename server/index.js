import bodyParser from 'body-parser';
import cors from 'cors';
import dotEnv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import posts from './routes/posts.js';

if (process.env.NODE_ENV !== 'production') {
  dotEnv.config();
}

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(morgan('tiny'));

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('this is the home page!!!');
  next();
});

app.use('/posts', cors(), posts);

//Mongo Database Connection
mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongoose Datebase..'))
  .catch((error) => console.error(error));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);
