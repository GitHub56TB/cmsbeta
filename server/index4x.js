const http = require('http')

const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')

const contactPage = fs.readFileSync('contact.html')

const homePage = fs.readFileSync('index.html')

const betaPage = fs.readFileSync('beta.php')


const server = http.createServer((request, response) => {
   
  if (request.url === '/about'){

    return response.end('THE ABOUT PAGE')

  } else if (request.url === '/contact'){

      return response.end('THE CONTACT PAGE')

  } else if (request.url === '/'){

      return response.end('THE HOME PAGE')

  } else if (request.url === '/beta'){

      return response.end('CMS PHP BETA PROTOTYPE HOME PAGE')

  } else {

      response.writeHead(404)

      response.end('HTHE PAGE WAS NOT FOUND')

  }



//   response.writeHead(404)
//   response.end('HELLO NODE JS')
 })

 server.listen(3000)
