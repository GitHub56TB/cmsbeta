const http = require('http')

const fs = require('fs')

//readFileSync ==> Synchronous (Like PGP)

const aboutPage = fs.readFileSync('about.html')

const contactPage = fs.readFileSync('contact.html')

const homePage = fs.readFileSync('index.html')

const betaPagePHP = fs.readFileSync('beta.html')

const jsPagePHP = fs.readFileSync('jsbeta.php')

//readFile ==> Asynchronous (Non Blocking)

/*
const aboutPage = fs.readFile('about.html')

const contactPage = fs.readFile('contact.html')

const homePage = fs.readFile('index.html')

const betaPagePHP = fs.readFile('beta.html')

const jsPagePHP = fs.readFile('jsbeta.php')
*/

// npm install express
// if error ==> npn init

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
