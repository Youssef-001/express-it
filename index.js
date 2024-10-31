const { createServer } = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

function htmlContentProvider(filePath) {
  let pageContent = fs.readFileSync(filePath);
  return pageContent;
}

function resProvider(res, status, format) {
  res.statusCode = status;
  res.setHeader("Content-type", format);
  return res;
}

const server = createServer((req, res) => {
  console.log("The url is: ", req.url);
  let url = req.url;
  if (url == "/") {
    res = resProvider(res, 200, "text/html");

    let pageContent = htmlContentProvider("./pages/index.html");
    res.end(pageContent);
  } else if (url == "/about") {
    res = resProvider(res, 200, "text/html");
    let pageContent = htmlContentProvider("./pages/about.html");
    res.end(pageContent);
  } else if (url == "/contact-me") {
    res = resProvider(res, 200, "text/html");
    let pageContent = htmlContentProvider("./pages/contact-me.html");
    res.end(pageContent);
  } else {
    res = resProvider(res, 200, "text/html");
    let pageContent = htmlContentProvider("./pages/404.html");
    res.end(pageContent);
  }
});
console.log(hello);

console.log("hello world");
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
