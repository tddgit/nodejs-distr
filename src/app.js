const express = require('express');
const expressHandlebars = require('express-hanblebars');

const app = express();

app.engine(
    'handlebars',
    expressHandlebars({
        defaultLayout: 'main',
    }),
);

app.set('veiw engine', 'handlebars');

const port = process.env || 3001;

app.get('/', (req, res) => {
    res.type('text/plain');
    res.status(200);
    res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.status(200);
    res.send('About Meadowlark Travel');
});

app.use(express.static(__dirname, '/public'));

app.use((req, res) => {
    // res.type('text/plain');
    res.status(404);
    // res.send('404- NOT FOUND');
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    // res.type('text/plain');
    res.status(500);
    // res.send('500-SERVER ERROR');
    res.render('500');
});

app.listen(port, () =>
    console.log(
        `Experss started on http://localhost:${port}` +
            `press Ctrl-C to terminate`,
    ),
);
