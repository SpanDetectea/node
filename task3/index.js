const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
const FILE_PATH = "pageViews.json";


let pageViews = { "/": 0, "/about": 0 };

if (fs.existsSync(FILE_PATH)) {
  const data = fs.readFileSync(FILE_PATH, "utf8");
  pageViews = JSON.parse(data);
}

function savePageViews() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(pageViews, null, 2));
}

function countPageView(req, res, next) {
  if (pageViews[req.path] !== undefined) {
    pageViews[req.path]++;
    savePageViews(); 
  }
  next();
}

function showPageViews(req, res) {
  res.send(
    `Страница ${req.path}, количество просмотров: ${pageViews[req.path]}`
  );
}

app.get("/", countPageView, showPageViews);
app.get("/about", countPageView, showPageViews);

app.listen(PORT);
