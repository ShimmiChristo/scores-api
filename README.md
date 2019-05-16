# Scores-API

During the NCAA basketball tournament, I want to know the scores of each games. Since NCAA.com does not have an open source API, I decided to scrape the data from their site. 

Using this data, I can create a website or web app. Since I am pulling the data dynamically, I do not have to update the database after every game.


The URL I used to scrape the scores - [2019 Mens NCAA Official Bracket](https://www.ncaa.com/brackets/basketball-men/d1/2019)

## Running the tests

```
node scoresScraper.js
```

## Built With

* [Express](https://github.com/expressjs/express) - Web framework for node.
* [request-promise](https://github.com/request/request-promise) - A simplified HTTP request with Promise support. Used to scrape the HTML from a URL.  
* [cheerio](https://github.com/cheeriojs/cheerio) - jQuery designed specifically for the server. Used to parse the HTML. 
