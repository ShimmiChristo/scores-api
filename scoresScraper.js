const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fs = require('fs');

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.ncaa.com/brackets/basketball-men/d1';

const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 3000;

    // app.use('/', getScores);

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });

    app.get('/', (req, res) => {
        fs.readFile(__dirname + 'basketball-scores.html', 'utf8', (err, getScores) => {
            res.send(getScores);
        });
    });


function getScores() {

    rp(url)
    .then(function(html){
        // const games = [];
        const round1Games = [];
        const round2Games = [];
        const round3Games = [];
        const round4Games = [];
        const finalGames = [];
        
        const round1 = $('.round-1', html);
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

    })
    .catch(function(err){
        //handle error
    });

    var finalList = document.createElement('ul');
    for (let g = 0; g <finalGames.length; g++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(finalGames[g]));
        finalList.appendChild(item);
        
    }
    return finalList;

}

