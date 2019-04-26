const rp = require('request-promise');
const $ = require('cheerio');
const url ='https://minimalistbaker.com/my-go-to-guacamole/';

const scrapeRecipe = function(url){


    return rp(url).then(function(html){
        //console.log($('.wprm-recipe-total_time-minutes', html).text());
        //console.log($('.wprm-recipe-course', html).text().trim());
        var ingreds = [];

        $('.wprm-recipe-ingredient-name', html).each(function(i, elem){
            ingreds[i] = $(this).text();
        })
        //console.log(ingreds);

        return {
            time: $('.wprm-recipe-total_time-minutes', html).text(),
            category: $('.wprm-recipe-course', html).text().trim(),
            ingredients: ingreds,
        }

    })
    .catch(function(err){
        console.log("fail");
        console.log("Error", err.stack);
        console.log("Error", err.name);
        console.log("Error", err.message);
        process.exit();
    });

};

module.exports = scrapeRecipe;