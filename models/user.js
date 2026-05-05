const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    email: { type: String, required: true },
    favoriteGenre:{ type: String, trim: true, required: true}
});
const User = mongoose.model('User', userSchema);
module.exports = User;





