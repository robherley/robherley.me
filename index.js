const express = require('express');
const morgan = require('morgan');
const app = express();

const requireHTTPS (req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

// Middleware
app.use(morgan('dev'));
app.use(requireHTTPS);

// Routes
app.use(express.static(__dirname + '/ui/build'));
app.get('/test', (req, res) => {
   res.send('<img src="http://i.imgur.com/Qry9lxG.jpg" width="100%"/>')
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () => {
  console.log('🚀  Website is running on port:', app.get('port'));
});
