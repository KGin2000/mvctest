const express = require('express');

const app = express();
app.use(express.json());

var movies = [
    {
        id: 1,
        name: "The Flash",
        type: "series",
        isPublished: false
    },
    {
        id: 2,
        name: "Arrow",
        type: "series",
        isPublished: true
    },
    {
        id: 3,
        name: "Harry Potter",
        type: "movie",
        isPublished: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>');
});

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        type: req.body.typeMovie,
        isPublished: req.body.isPublished
    };
    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) {
        res.status(404).send('The movie with the given ID was not found ')
    }else {
        movie.name = req.body.name;
        movie.type = req.body.typeMovie;
        movie.isPublished = req.body.isPublished;
    
        res.send(movie);
    }
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );