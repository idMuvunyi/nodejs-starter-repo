const http = require('http');

const server = http.createServer((req, res) =>{
  if(req.url === '/'){
    res.write('Hello Client');
    res.end();
  }
  
  if(req.url === '/api/cows'){
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});
server.listen(5000, () => {
  console.log(`Running on port 5000`);
})