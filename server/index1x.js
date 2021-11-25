const http = require('http')

 const server = http.createServer((request, response) => {
   console.log(request.url)
   if (request.url === '/about'){

    return response.end('THE ABOUT PAGE')

   } else if (request.url === '/contact'){

      return response.end('THE CONTACT PAGE')

    } else if (request.url === '/'){

      return response.end('THE HOME PAGE')

    } else {

      response.writeHead(404)

      response.end('HTHE PAGE WAS NOT FOUND')

    }



//   response.writeHead(404)
//   response.end('HELLO NODE JS')
 })

 server.listen(3000)
