

var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(3000);

function handler(req, res) {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end("Error loading index.html")
        }
        res.writeHead(200);
        res.end(data)
    })
}

io.on('connection', (socket) => {
    socket.emit('news', { serverData: "받아라!" });
    socket.on('client login', (data) => {
        console.log(data)
    })

    socket.on('disconnect', function(){  // 3
		console.log('접속이 종료되었습니다.');
	});
})