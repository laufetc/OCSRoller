var mongoose= require("mongoose");


var gameSchema = mongoose.Schema({
    gameName: {type:String, required:true, unique:true },
    gameDescription: { type: String, required: true },
    user1: { type: String, required: true },
    user2: { type: String, required: true },
    email1: { type: String, required: true },
    email2: { type: String, required: true },
    user1Rolls:Array,
    user2Rolls:Array
});

                               

var Game = mongoose.model("Game", gameSchema);
module.exports = Game;