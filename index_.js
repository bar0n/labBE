var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

  function start(){
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });

        http.listen(3000, function(){
        console.log('listening on *:3000');
    });
}

start();

//process.send({ foo: 'bar' });
/*
process
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});
process.on('foo', () => {});*/
