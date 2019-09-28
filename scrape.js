var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://books.toscrape.com/')
  .click('a[href="catalogue/a-light-in-the-attic_1000/index.html"]')
  .wait('p')
  .evaluate(() => {
    var baseNode = document.getElementById('product_description');
    return baseNode.nextElementSibling.innerText;
  })
  .end()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error('Search failed:', error)
  })