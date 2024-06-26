var http = require('http');
var dt = require('./mydatemodule');//.อิงpartของไฟล์นั้น . ณ ปัจจุบันว่าอยู่โฟลเดอร์ไหน,.. ย้อนกลับไป

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
   res.end();

}).listen(8080);

console.log('Server runnung at http://127.0.0.1:8080');