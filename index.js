const express = require('express');
const morgan = require('morgan');
const app = express();

app.enable('trust proxy');
const requireHTTPS = (req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

// Middleware
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS);
}

// Routes
app.use(express.static('ui/build'));
app.get('/test', (req, res) => {
   res.send('<h1>I AM THE SERVER</h1>')
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('🚀  Server is running on port:', port);
});
