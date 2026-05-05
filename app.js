const express = require('express');
const mongoose = require('mongoose');

const movie = require('./models/Movie');
const User = require('./models/user');

const app = express();

app.set("view engine", 'ejs');
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/movie")
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB is not connected"));

app.get('/movie', async (req, res) => {
    try {
        const movie = await movie.find(); 
        res.render('mov', {movie});
    } catch (err) {
        console.log(err);
        res.send("Error movie");
    }
});



app.get('/movie/new', (req, res) => {
    res.render('new');
});


app.post('/movie', async (req, res) => {
    try {
        const {title, genre, releaseDate, director, rating, review } = req.body;

        await movie.create({
            title,
            genre,
            releaseDate,
            director,
            rating,
            review
        });

        res.redirect('/movie');
    } catch (err) {
        console.log(err);
        res.send("Error saving movie");
    }
});


app.listen(4000, () => {
    console.log("Server running");
});
