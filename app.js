const addDays = require("express");
const express = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const result = new Date();
  const result1 =addDays(

       new Date(result.getFullYear(), result.getMonth(), result.getDate(), 100)

    response.send( 
  
    `${result1.getFullYear()}/${result1.getMonth() + 1}/${result1.getDate()}`
  );
});
module.exports = app;
