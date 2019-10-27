const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/simplebooks', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;