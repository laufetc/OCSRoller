var mongoose= require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;

//var moment=require("moment");

var rollObjSchema = mongoose.Schema ({
    rollTitle: "String",
    rollDesc: "String",
    attackType:"String",
    terrainType:"String",
    attackStrength:Number,
    attackCR:Number,
    defenseStrength: Number,
    defenseCR: Number,
    turnNum:Number,
    rawDie:Number,
    AL1:Number,
    AL2:Number,
    Ao1:Number,
    Ao2:Number,
    DL1:Number,
    DL2:Number,
    Do1:Number,
    Do2:Number,
    Do3:Number,
    Ae2:Number,
    Ae3:Number,
    Ae4:Number,
    createdOn:"String"
});

var gameSchema = mongoose.Schema({
    gameName: {type:String, required:true },
    gameDescription: { type: String, required: true },
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    email1: { type: String, required: true },
    email2: { type: String, required: true },
    user1Rolls:[rollObjSchema],
    user2Rolls:[rollObjSchema]
});

var userSchema = mongoose.Schema({
    username: {type:String, required:true, unique:true },
    password: { type: String, required: true },
    email: {type:String, required: true, unique:true },
    bio: String,
    games: [gameSchema] 
});

var noop = function() {};                                 
userSchema.pre("save", function(done) {                   
  var user = this;                                        
  if (!user.isModified("password")) {                     
    return done();                                        
  }                                                       
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {       
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, noop,function(err, hashedPassword) {                   
      if (err) { return done(err); }
      user.password = hashedPassword;                     
      done();                                             
        }); 
  });
});

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {   
    done(err, isMatch);
  });
};

var User = mongoose.model("User", userSchema);
module.exports = User;