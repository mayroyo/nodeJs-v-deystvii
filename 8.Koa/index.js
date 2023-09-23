const koa = require("koa");
const app = new koa();

const Router = require("@koa/router");
const router = new Router();

const fs = require("fs");
const html = fs.readFileSync("index.html").toString();
const items = fs.readFileSync("items.html").toString();

router
  .get("/", (ctx, next) => {
    ctx.body = html;
  })
  .get("/items", (ctx, next) => {
    ctx.body = items;
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("server started on http://localhost:3000"));
