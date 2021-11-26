const http = require('http')

const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')

const contactPage = fs.readFileSync('contact.html')

const homePage = fs.readFileSync('index.html')

const betaPagePHP = fs.readFileSync('beta.html')

const jsPagePHP = fs.readFileSync('jsbeta.php')


const server = http.createServer((request, response) => {
   
  if (request.url === '/about'){

    return response.end(aboutPage)

  } else if (request.url === '/contact'){

      return response.end(contactPage)

  } else if (request.url === '/'){

      return response.end(homePage)

  } else if (request.url === '/beta'){

      return response.end(betaPagePHP)


  } else if (request.url === '/jsbeta.php'){

      return response.end(jsPagePHP)

   
  } else {

      response.writeHead(404)

      response.end('HTHE PAGE WAS NOT FOUND')

  }



//   response.writeHead(404)
//   response.end('HELLO NODE JS')
 })

 server.listen(3000)
