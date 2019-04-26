const rp = require('request-promise');
const $ = require('cheerio');
//const url = 'https://minimalistbaker.com/recipes/';
const scrapeRecipe = require('./scrape_recipe');
const scrapePage = require('./scrape_page');
const urlExists = require('./urlExists');
const fs = require('fs');

/*class Recipe {
    constructor(name, img, description, ingredients, category, time){
        this.name = name;
        this.img = img;
        this.description = description;
        this.ingredients = ingredients;
        this.category = category;
        this.time = time;
    }
}*/

var stream = fs.createWriteStream('recipes.json', {flags:'a'});

var baseURL = 'https://minimalistbaker.com/recipes/page/';
var page = 1;

var url = baseURL + page;
/*while (urlExists(url)){
    //scrape page
    scrapePage(url, stream)
    i++;
    url = baseURL + i;
    console.log(i);
}*/

for(page; page < 61; page++){
    url = baseURL + page
    scrapePage(url, stream, page);
}

//var recipes = scrapePage('https://minimalistbaker.com/recipes/page/1');

//console.log(recipes);
