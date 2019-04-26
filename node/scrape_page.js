const rp = require('request-promise');
const $ = require('cheerio');
const scrapeRecipe = require('./scrape_recipe');
const url = 'https://minimalistbaker.com/recipes/page/1';
//const fs = require('fs');

/*const scrapePage = function(url) {
    return rp(url).then(function(html){
        //var short = html.split('\n');
        //console.log(short.slice(0,5));
        numRecipes = $('article.type-post', html).length
        //console.log(numRecipes);


        var recipes = [];

        for(var i = 0; i < numRecipes; i++){
            recipes[i] = {};
        }

        $('article > footer > h2 > a', html).each(function(i, elem) {
            recipes[i].name = $(this).text();
        })

        $('article.type-post > div > a > img', html).each(function(i, elem){
            recipes[i].img = ($(this).attr("data-lazy-src"));
        })

        //console.log($('article.type-post > div > a > img', html).length);

        $('article.type-post > div > a', html).each(function(i, elem){
            var url = ($(this).attr("href"));
            recipes[i].url = url;
            var recipe = scrapeRecipe(url);
            recipe.then(function(result){
                recipes[i].time = result.time;
                recipes[i].category = result.category;
                recipes[i].ingredients = result.ingredients;

                console.log(recipes[i]);
            })
            //console.log(recipe);
            //recipes[i].time = recipe.time;
            //recipes[i].category = recipe.category;
            //recipes[i].ingredients = recipe.ingredients;

        })

        console.log(recipes);

    })
    .catch(function(err){
        console.log("Error", err.stack);
        console.log("Error", err.name);
        console.log("Error", err.message);
    })
}

module.exports = scrapePage;*/

const scrapePage = function(url, stream, page) {
    return rp(url).then(function(html){
        //var short = html.split('\n');
        //console.log(short.slice(0,5));
        numRecipes = $('article.type-post', html).length
        //console.log(numRecipes);
        console.log(page);
    
    
        var recipes = [];
    
        for(var i = 0; i < numRecipes; i++){
            recipes[i] = {};
        }
    
        $('article > footer > h2 > a', html).each(function(i, elem) {
            recipes[i].name = $(this).text();
        })
    
        $('article.type-post > div > a > img', html).each(function(i, elem){
            recipes[i].img = ($(this).attr("data-lazy-src"));
        })
    
        //console.log($('article.type-post > div > a > img', html).length);
    
        $('article.type-post > div > a', html).each(function(i, elem){
            var url = ($(this).attr("href"));
            recipes[i].url = url;
            var recipe = scrapeRecipe(url);
            recipe.then(function(result){
                recipes[i].time = result.time;
                recipes[i].category = result.category;
                recipes[i].ingredients = result.ingredients;
    
                //console.log(recipes[i]);
                return recipes[i];
            })
            .then(function(recipe){
                //console.log(recipe);
                stream.write(JSON.stringify(recipe, null, 4) + ",\n");
            })
            //console.log(recipe);
            //recipes[i].time = recipe.time;
            //recipes[i].category = recipe.category;
            //recipes[i].ingredients = recipe.ingredients;
    
        })
    
        //console.log(recipes);
    
    })
    .catch(function(err){
        console.log("Error", err.stack);
        console.log("Error", err.name);
        console.log("Error", err.message);
    })
}

module.exports = scrapePage;


