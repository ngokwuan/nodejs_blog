import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import methodOverride from 'method-override';
import { mainRoute } from './routes/index.route.js';

import * as db from './config/db/index.js';

//connect to db
db.connect();

const app = express();
const port = 3000;

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

//middleware override lai phuong thuc gui len
app.use(methodOverride('_method'));
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    cache: false,
    //vi template engine k dung duoc phep cong nen phai tu tao ham de dung no trong view
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

//Route init
mainRoute(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
