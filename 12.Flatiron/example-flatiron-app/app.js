var flatiron = require("flatiron"),
  path = require("path"),
  app = flatiron.app;

app.config.file({ file: path.join(__dirname, "config", "config.json") });

app.use(flatiron.plugins.http);

app.router.get("/", function () {
  this.res.json({ hello: "world" });
});

app.router.get("/example", function () {
  this.res.writeHead(200, { "content-type": "text/plain" });
  this.res.end("Hello, World");
});

app.start(3000);
