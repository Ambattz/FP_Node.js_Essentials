const http = require('http');
const url = require('url');
//write your code here

function sum(queryObject, res) {
    var result = queryObject.a + queryObject.b;
    res.writeHead(200);
    // res.write(`Addition is: ${String(result)}`);
    // console.log(`Addition is: ${String(result)}`);
    res.end(`Addition is: ${String(result)}`);
}
function sub(queryObject, res) {
    var result = queryObject.a - queryObject.b;
    res.writeHead(200);
    // res.write(`Subtraction is: ${String(result)}`);
    res.end(`Subtraction is: ${String(result)}`);
}
function mul(queryObject, res) {
    var result = queryObject.a * queryObject.b;
    res.writeHead(200);
    // res.write(`Multiplication is: ${String(result)}`);
    res.end(`Multiplication is: ${String(result)}`);
}
function div(queryObject, res) {
    var result = queryObject.a / queryObject.b;
    res.writeHead(200);
    // res.write(`Division is: ${String(result)}`);
    res.end(`Division is: ${String(result)}`);
}
function home(queryObject, res) {
    res.writeHead(200);
    res.end(``);
}

var handle = {};
handle['add'] = sum;
handle['subtract'] = sub;
handle['multiple'] = mul;
handle['div'] = div;
handle['home'] = home;

function server(route) {
    var port = 8000;
    const server = http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        if (pathname != '/favicon.ico') {
            var queryObject = url.parse(req.url, true).query;
            // console.log(pathname);
            // console.log(queryObject);
            var query = {
                func: String(queryObject.func),
                a: Number(queryObject.a),
                b: Number(queryObject.b),
            }
            route(handle, pathname, query, res);
        }
    });
    server.listen(port, 'localhost', (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }
        // console.log(`server is listening on ${port}`)
    });
}

function route(handle, pathname, query, res) {
    // console.log('Route Function');
    // console.log(handle.add(query, res));
    var func = query.func;
    // console.log(func);
    // console.log(pathname);
    if (pathname === '/') {
        // console.log("root");
        func = 'home';
    }
    else if (func === "undefined" && query.a != "undefined" && query.b != "undefined") {
        func = 'div';
        // console.log('div');
    }
    else if (pathname === '/cal') {
        // console.log("handler");
    }
    else {
        func = 'home';
        // console.log('home');
    }
    handle[func](query, res);
}

server(route);
