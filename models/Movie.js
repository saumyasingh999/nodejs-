const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Number, required: true},
    director: { type: String, required: true },
    rating: { type: String , required: true},
    review : {type: String, required: true}
});
const movie = mongoose.model('movie', movieSchema);
module.exports = movie;

