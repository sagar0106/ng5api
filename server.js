const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth_routes = require('./routes/auth.js');
const module_routes = require('./routes/module');
const project_routes = require('./routes/project');
const role_routes = require('./routes/role');
const toDo_routes = require('./routes/toDo');
const user_routes = require('./routes/user');
const tokenService = require('./services/validateToken');
const mongoose = require('./config/mongoose.js');
const db = mongoose();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token, mode,embeddedToken');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'totalRecords');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', auth_routes);
app.use('/api/module', tokenService.checkToken, module_routes);
app.use('/api/project', tokenService.checkToken, project_routes);
app.use('/api/role', tokenService.checkToken, role_routes);
app.use('/api/toDo', tokenService.checkToken, toDo_routes);
app.use('/api/user', tokenService.checkToken, user_routes);

app.listen(4000);
console.log('listening on port 4000');
module.exports = app;