import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';

const app = express();
const port = 3000;

// Phục vụ static files
app.use(express.static('src/public'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
