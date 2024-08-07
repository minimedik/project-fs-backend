const router = require('express').Router();
let Auction = require('../models/auctionlist.model');

router.route('/').get((req, res) => {
    const query = req.query.q;
    Auction.find(
        { 
            $or: [
            {'name': new RegExp(query, 'i')},  
            {'theme': new RegExp(query, 'i')},
            {'description': new RegExp(query, 'i')},
            ]
        }
    )
        .then((auctions) => res.json(auctions))
        .catch((err) => res.status(400).json('Error: ' + err));

});




router.route('/add').post(async (req, res) => {
    const theme = req.body.theme;
    const name = req.body.name;
    const age = req.body.age;
    const pieces = req.body.pieces;
    const item_number = req.body.item_number;
    const description = req.body.description;
    const minimum_bid = req.body.minimum_bid;
    const image = req.body.image

    // create a new Auction object
    const newAuction = await new Auction({
        theme, name, age, pieces, item_number, description, minimum_bid, image
    });
    console.log(newAuction);
    // save the new object (newAuction)
    newAuction
        .save()
        .then(() => res.json('Auction added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});


module.exports = router;