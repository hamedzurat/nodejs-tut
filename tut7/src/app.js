const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../templates/views'));
app.use(express.static(path.join(__dirname,'../public')));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));


app.get('/dy', (req, res) => {
    res.render('dy',{
        title: "from app.js",
        name: "zoocat"
    });
});

app.get('/dy_about', (req, res) => {
    res.render('dy_about',{
        title: "about myself",
        name: "zoocat"
    });
});

app.get('/dy_help', (req, res) => {
    res.render('dy_help',{
        help_text: "this the help text u will get from ",
        name: "zoocat"
    });
});

// app.get('', (req, res) => {
//     res.send("<h1>hullo</h1>");
//     console.log('serverd a home page req');
// });

// app.get('/help', (req, res) => {
//     res.send("<h1>need help ?</h1>");
//     console.log('serverd a helping req');
// });

// app.get('/about', (req, res) => {
//     res.send("<h1>all about me</h1>");
//     console.log('serverd a about me req');
// });

app.get('/weather', (req, res) => {
    //res.send("<h1>todays weather is</h1>");
    res.send({
        location: "khulna",
        forecast: "best"
    })
    console.log('serverd a weather req');
});

app.get('/dy_help/*', (req,res) => {
    //res.send("this help page dont exist in the first place");
    res.render('dy_404',{
        txt: "this help page dont exist in the first place"
    });
});

app.get('*', (req,res) => {
    //res.send("404");
    res.render('dy_404',{
        msg: "this page dosent exist",
        name: "zoocat"
    });
});

app.listen(3000, () => {
    console.log("server is up at port 3000");
});

