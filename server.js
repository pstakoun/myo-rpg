var http = require('http');
var port = process.env.PORT || 3000;

// Start server on specified port.
http.listen(port, function() {
    console.log('Server running on port ' + port);
});
