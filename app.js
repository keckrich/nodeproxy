var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://[2604:2800:5:6170:4c0b:5ed1:5b35:eee7]:12368/'}).listen(12367);


httpProxy.createProxyServer({target:'http://[2604:2800:5:6170:4c0b:5ed1:5b35:eee7]:12368/'}).listen(8880);