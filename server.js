const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT  ? process.env.PORT : 5003
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  console.log("got it")
  try{
    console.log("got it 2")
    let server = createServer(async (req , res)=>{
      try {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
  
        if (pathname === '/a') {
          await app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
          await app.render(req, res, '/b', query)
        } else {
          await handle(req, res, parsedUrl)
        }
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })

    server.listen(port , (err)=>{
      console.log("got it 4")
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)

    })

    console.log("our server is  ", server)
  }catch(err){
    console.log("our first error is  ", err)
  }
}).catch(err=>{
  console.log("our error  ", err)
})



console.log('we are here ')