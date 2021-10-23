var express = require('express');
const path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.use(express.static('pdf'));

// index page
app.get('/oxide-thin-film', function(req, res) {
  res.render('pages/index', { ZnOlink: "../../pdf/ZnO-thin-film.pdf", HfOlink: './pdf/HfO-thin-film.pdf'});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/googlee8996dd462e667c2.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);