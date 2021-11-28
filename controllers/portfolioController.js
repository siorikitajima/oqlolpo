const fs = require('fs');
const data = fs.readFileSync('./json/portfolio.json');
const portfolioData = JSON.parse(data);
let names = [];
for (let p = 0; p < portfolioData.length; p++ ) {
    let name = portfolioData[p].slug;
    names.push(name);
}
const tdata = fs.readFileSync('./json/tile.json');
const tileData = JSON.parse(tdata);

const portfolio_get = (req, res) => {
    res.render('portfolio', {
        title: "Portfolio",
        nav: 'portfolio',
        slug: 'portfolio',
        pfs: portfolioData
    });
};

const pfitem_get = (req, res) => {
    let itemId = req.params.ptid;
    let item;
    for(let i = 0; i < portfolioData.length; i++) {
        if( portfolioData[i].slug == itemId) {
            item = portfolioData[i];
            break;
        }
    }
    res.render('pfitem', {
        title: item.name,
        nav: 'pfitem',
        pfitem: item,
        names: names
    });
}

const about_get = (req, res) => {
    res.render('about', {
        title: 'About',
        nav: 'about',
        slug: 'about',
        tiles: tileData
    });
}

module.exports = {
    portfolio_get,
    pfitem_get,
    about_get
}