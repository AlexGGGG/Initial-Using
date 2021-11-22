const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>KutseHaridusKeskus Sillamae;)</h1>')

    res.end(`
        <div style="background: blue; width: 1px; height: 200px;">
            <img src="webserver/img/1.jpg" width="400" height="300">
            <hr>
        </div>
    `)
})

server.listen(3002, () => {
    console.log('Server is running...')
})
