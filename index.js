const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views',__dirname+'/src/views');

app.use(express.urlencoded({extended: true})); //encoder de url do express para acessa-los

app.use('/', require('./src/routers/calculaterRouters'))

const PORT = 8080;
app.listen(PORT, () => {
    console.log('App rodando na porta '+PORT);
});

