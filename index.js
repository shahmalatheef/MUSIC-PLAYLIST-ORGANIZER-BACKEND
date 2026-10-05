const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const middleware = jsonserver.defaults()
const port = 3000
server.use(middleware)
server.use(router)
server.listen(port,()=>{
    console.log('Server running on the port',port);
})