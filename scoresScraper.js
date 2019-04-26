const express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        fs = require('fs'),
        path = require('path'),
        router = express.Router(),
        rp = require('request-promise'),
        $ = require('cheerio');

const url = 'https://www.ncaa.com/brackets/basketball-men/d1';

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// app.get('/', function(req, res){
//     res.render('basketball-scores');
// })


app.listen(3000, function () {
    console.log('Listening on port 3000')
  });

  // const games = [];
  const round1Games = [];
  const round2Games = [];
  const round3Games = [];
  const round4Games = [];
  const finalGames = [];


// (function getScores() {

    rp(url)
    .then(function(html1){
        
        const round1 = $('.round-1', html1);
        for (let i =0; i < round1.length; i++) {
            round1Games.push({
                'round': 'round-1',
                'date': $(round1[i]).find('.pod-status').children('span:first-child').text(),
                'winner': $(round1[i]).find('.teams').children("div[class='team winner']").children('.name').text(),
                'winningScore': $(round1[i]).find('.teams').children("div[class='team winner']").children('.score').text(),
                'loser': $(round1[i]).find('.teams').children("div[class='team']").children('.name').text(),
                'losingScore': $(round1[i]).find('.teams').children("div[class='team']").children('.score').text()
            })

        }
        return html1;
    })
        
    .then(function(html){


        const round2 = $('.round-2', html);
        for (let i =0; i < round2.length; i++) {
            round2Games.push({
                'round': 'round-2',
                'date': $(round2[i]).find('.pod-status').children('span:first-child').text(),
                'winner': $(round2[i]).find('.teams').children("div[class='team winner']").children('.name').text(),
                'winningScore': $(round2[i]).find('.teams').children("div[class='team winner']").children('.score').text(),
                'loser': $(round2[i]).find('.teams').children("div[class='team']").children('.name').text(),
                'losingScore': $(round2[i]).find('.teams').children("div[class='team']").children('.score').text()
            })

        }

    })
        
    .then(function(html){

        const round3 = $('.round-3', html);
        for (let i =0; i < round3.length; i++) {
            round3Games.push({
                'round': 'round-3',
                'date': $(round3[i]).find('.pod-status').children('span:first-child').text(),
                'winner': $(round3[i]).find('.teams').children("div[class='team winner']").children('.name').text(),
                'winningScore': $(round3[i]).find('.teams').children("div[class='team winner']").children('.score').text(),
                'loser': $(round3[i]).find('.teams').children("div[class='team']").children('.name').text(),
                'losingScore': $(round3[i]).find('.teams').children("div[class='team']").children('.score').text()
            })
        }

    })
        
    .then(function(html){

        const round4 = $('.round-4', html);
        for (let i =0; i < round4.length; i++) {
            round4Games.push({
                'round': 'round-4',
                'date': $(round4[i]).find('.pod-status').children('span:first-child').text(),
                'winner': $(round4[i]).find('.teams').children("div[class='team winner']").children('.name').text(),
                'winningScore': $(round4[i]).find('.teams').children("div[class='team winner']").children('.score').text(),
                'loser': $(round4[i]).find('.teams').children("div[class='team']").children('.name').text(),
                'losingScore': $(round4[i]).find('.teams').children("div[class='team']").children('.score').text()
            })
        }

    })
        
    .then(function(html){
        const final = $('.center-final-games > .final', html);
        for (let i =0; i < final.length; i++) {
            // var item = document.createElement('li');
            // item.appendChild(document.createTextNode(final[i]));
            // finalList.appendChild(item);
            
            finalGames.push({
                'round': 'final-games',
                'date': $(final[i]).find('.pod-status').children('span:first-child').text(),
                'winner': $(final[i]).find('.teams').children("div[class='team winner']").children('.name').text(),
                'winningScore': $(final[i]).find('.teams').children("div[class='team winner']").children('.score').text(),
                'loser': $(final[i]).find('.teams').children("div[class='team']").children('.name').text(),
                'losingScore': $(final[i]).find('.teams').children("div[class='team']").children('.score').text()
            })
        }
        // return finalGames;

        
        // app.get("/", function(req, res) {
        //     res.render("basketball-scores", { finalGames: finalGames});
        // });
        
        
    })
    .catch(function(err){
        //handle error
    });


    console.log(round1Games);
    
    // var finalList = document.createElement('ul');
    // for (let g = 0; g <finalGames.length; g++) {
    //     var item = document.createElement('li');
    //     item.appendChild(document.createTextNode(finalGames[g]));
    //     finalList.appendChild(item);
        
    // }
    // return finalList;

// })();


// the task array with initial placeholders for added task
// var task = ["buy socks", "practise with nodejs"];
// post route for adding new task
// app.post('/', function (req, res) {
//     var newTask = req.body.newtask;
// //add the new task from the post route into the array
//     task.push(newTask);
// //after adding to the array go back to the root route
//     res.redirect("/");
// });
// render the ejs and display added task, task(index.ejs) = task(array)
