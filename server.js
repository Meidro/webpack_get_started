const express = require('express');

const app = express();
app.set('port', 8080);
app.use(express.static(__dirname + '/dist'));
app.listen(app.get('port'), function () {
   console.log('Server started: http://localhost:' + app.get('port') + '/');
   console.log(__dirname);
});
