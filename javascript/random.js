var links = [];
var category = "";

phantom.onError = function(){};

var casper = require('casper').create({
  verbose: true,
  logLevel: 'error'
});

function getCategories() {
    var links = document.querySelectorAll('#category > div:nth-child(3) > div > div.cg-main > div > div > div > ul > li > a')
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

function getStoreItems() {
    var links = document.querySelectorAll('#list-items h3 > a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://www.aliexpress.com/all-wholesale-products.html');

casper.then(function() {
    // aggregate all alliexpress categories
    links = this.evaluate(getCategories);
    category = links[Math.floor(Math.random()*links.length)];
    category += "?shipCountry=cz&SortType=price_asc&isFreeShip=y";
    this.open(category);
});

casper.then(function() {
    var items = this.evaluate(getStoreItems);
    var item = items[Math.floor(Math.random()*items.length)];
    this.echo(item);
});


casper.run(function() {
  this.exit();
  phantom.exit();
});
