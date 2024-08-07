const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const auctionSchema = new Schema({
    theme: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    pieces: { type: Number, required: true },
    item_number: { type: Number, required: true },
    description: { type: String, required: true },
    minimum_bid: {type: Number, required: true},
    image: { type: String, required: true },
    bids: [{
         author: { type: String, required: true },
         amount: { type: Number, required: true }
     }]
});

// This Activitry creates the collection called activitimodels
const Auctionmodel = mongoose.model("Auctionmodel", auctionSchema);
module.exports = Auctionmodel;