import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { mainRoute } from './routes/index.route.js';

const app = express();
const port = 3000;
//Route init
mainRoute(app);
// Phục vụ static files
app.use(express.static('src/public'));
//Xu ly middleware tu form
app.use(
  express.urlencoded({
    extended: true,
  })
);
//XMLHttpRequest,fetch,axios--gui len get hay post deu duoc den server k can vs dang form
//nay la gui duoi sang json
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
