const express = require('express');
const morgan = require('morgan');
const covidRoutes = require('./routes/index');
const app = express();

app.set('port', process.env.PORT || '3000');
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(app.get('port'));


app.use('/api/covid', covidRoutes);
app.get('/', (req, res)=>{
    res.send(`Listening on port ${app.get('port')}`);
});