require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "./templates/partials")
const template_path = path.join(__dirname, "./templates/views")
const PORT = process.env.PORT || 4000

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{
    res.render("404error",{
        errorMsg :"Oops! Page not found"
    })
})

app.listen(PORT, (req,res)=>{
    console.log(`App in running at port ${PORT}`);
})
