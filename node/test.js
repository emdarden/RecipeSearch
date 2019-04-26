const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://minimalistbaker.com/recipes/';
const scrapeRecipe = require('./scrape_recipe');

var test = [];

rp(url).then(function(html){
    recipes = [];

    $('article.type-post', html).each(function(i, elem){
        recipes[i] = {};
        recipes[i].name = $('footer > h2 > a', this).text();
        recipes[i].img = $('div > a > img', this).attr("data-lazy-src");
        recipes[i].url = $('div > a', this).attr('href');
    })

    var rest = function func(i){
        return scrapeRecipe(recipes[i].url);
    }

}).then(function(results){

    test = results;
    for(var i = 0; i < results.length; i++){
        var url = results[i].url;
        scrapeRecipe(url).then(function(rs){
            results[i].time = rs.time;
            results[i].category = rs.category;
            results[i].ingredients = rs.ingredients;
        })
    }

    console.log(results);
})
.catch(function(err){
    console.log("Error", err.stack);
    console.log("Error", err.name);
    console.log("Error", err.message);
})

console.log(test);