const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(morgan('dev'));

// Routes
app.use(express.static(__dirname + '/ui/build'));
app.get('/test', (req, res) => {
   res.send('<img src="http://i.imgur.com/Qry9lxG.jpg" width="100%"/>')
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () => {
  console.log('🚀  Website is running on port:', app.get('port'));
});
