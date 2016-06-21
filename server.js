var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./public/views"));
app.listen(5000);
console.log('Server listening on port 5000');
