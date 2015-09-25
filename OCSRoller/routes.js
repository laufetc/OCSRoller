var express = require("express");
app=express();
var passport=require("passport")
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-e07b653f713a04cef459cfa084c0b7b6');

var User = require("./models/user");
//var Game = require("./models/game");
var router = express.Router();
//var roll = require("./public/js/roll.js");
//Flash messaging for authentication of user
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {                                    
    next();
  } else {
    req.flash("info", "Hey, you've got to be logged in to do that!");
    res.redirect("/login");
  }
}

//parse data for use by router
router.use(function(req,res,next) {
    res.locals.currentUser=req.user;
    res.locals.newRoll=app.locals.newRoll;
    res.locals.currentGame=req.Game;
    res.locals.errors=req.flash("error");
    res.locals.infos=req.flash("info");
    next();
});

// display index page...requires {users} to display current User Name
router.get("/", function(req, res, next) {
    User.find()
    .exec(function(err, users) {
        if(err) { return next(err); }
    res.render("index", {users: users });
    });
});


//Roll result email post method
router.post("/email", function(req,res) {
////    console.log('email sent');
    var from = req.body.email;
////    console.log(from);
    var to = req.body.email2;
////    console.log(to);
    var subject = req.body.attackID;
////    console.log(subject);
    var text = req.body.combat_output;
////    console.log(text);
        mg.sendText( from, (to,from), subject, text, function(err){err && console.log(err) });
        req.flash('info', 'Email containing attack details Sent!')
    res.redirect("/") 
});

//display login page
router.get("/login", function(req, res, next) {
    res.render("login");
});

// login post method 
router.post("/login",passport.authenticate("login",{
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true           
}));

// render UserPage
//router.get("/userPage", ensureAuthenticated, function(req, res) {    
//  res.render("userPage");
//});

//logout method
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// renders edit profile page
router.get("/editPage", ensureAuthenticated, function(req,res, next){
           res.render("editPage")
});

// edit profile METHOD
router.post("/edit", ensureAuthenticated, function(req, res, next) {  
  req.user.displayName = req.body.displayName;
    req.user.bio = req.body.bio;
  req.user.save(function(err) {
    if (err) {
      next(err);
return; }
    req.flash("info", "Profile updated!");
    res.redirect("/userList");
  });
});

//signup route
router.get("/signup", function(req, res, next) {
    res.render("signup");
});

//signup post METHOD
router.post("/signup", function(req,res,next) {
    
    var username= req.body.username;
    var password= req.body.password;
    var email= req.body.email;
    
    User.findOne({  username:username }, function(err, user) {  
    if (err) { return next(err); }
    if (user) {                                                
      req.flash("error", "User already exists");               
      return res.redirect("/signup");                          
    }
    var newUser = new User({
      username: username,
      password: password,
        email: email
    });
    newUser.save(next);
  });
}, passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/signup",
  failureFlash: true
}));

//userList render
router.get("/userList", function(req, res, next) {
    User.find()
    .sort({ username: "descending"})
    .exec(function(err, users) {
        if (err) { return next(err);}
        res.render ("userList", { users: users});
    });
});

//User Page render
router.get("/userPage/:username",function (req, res, next) {
    User.findOne({ username: req.params.username }, function(err, user) {
        if (err) {return next(err); }
        if(!user) {return next(404); }
        console.log(user);
        res.render("userPage", { user: user});
    });
});

//router.get("/gamepage/:username",function (req, res, next) {
//    User.findOne({ username: req.params.username }, function(err, user) {
//        if (err) {return next(err); }
//        if(!user) {return next(404); }
//        console.log(user);
//        res.render("userPage", { user: user});
//    });
//});

//User email post method
router.post("/emailUser/:username", ensureAuthenticated, function(req,res,next) {
    
    User.findOne({username:req.params.username}, function(err, user){
        
        console.log(user);
    console.log('email sent');
    var from = req.user.email;
    console.log(typeof from);
    var to = user.email;
    console.log(typeof to);
    var subject = "Whatsup, wanna play?";
    console.log(subject);
    var text = "Hey, I'd like to play a game with ya. Interested? Email me back";
    console.log(text);
        mg.sendText( from, to , subject, text, function(err){err && console.log(err) });
        req.flash('info', 'Email sent to user')
    res.redirect("/userList") 
    });
});


//New Game Page Render
router.get("/newGame", ensureAuthenticated, function(req,res,next){
    res.render("newGame");
});
    
//New Game Post method
router.post("/newGameCreate", function(req,res,next) {
    var gameName= req.body.gameName;
    var gameDescription= req.body.gameDescription;
//    var user1= req.user.username;
    var email1 = req.user.email;
    var player2 = req.body.user2;
  User.findOne({ username:player2 }, function(err, user) {
      if (!user) {
          return (err)
      }
      else {
//          console.log(user)}})})
         var email2=user.email;
          console.log(user)
         user.games.push({
         gameName:gameName,
        gameDescription:gameDescription,
      player1: req.user.username,
      player2: player2,
        email1: email1,
        email2: email2,
         }); 
          console.log(user.games);
          user.save(function(err) {
              if (err) {
      next(err);
return; }})
       User.findOne({ username:req.user.username }, function(err, user) {   
//           var email2=user.email;
          console.log(user)
         user.games.push({
         gameName:gameName,
        gameDescription:gameDescription,
      player1: req.user.username,
      player2: player2,
        email1: email1,
        email2: email2,
         }); 
//          console.log(user.games);
          user.save(function(err) {
              if (err) {
      next(err);
return; }})
       });
                    
                    
    req.flash('info', 'New Game Created')
 res.redirect("/");
          }
      });
  
});
      
router.get("/gamePage/:username/:gamename", function(req,res, next){
    User.findOne({ username:req.params.username }, function(err, user) {
        console.log(user);
       var thisGameName = req.params.gamename;
        console.log(thisGameName);
        var thisGame = user.games.filter(function( obj ) {
  return obj.gameName == thisGameName;
});
//        var thisGame = user.games;
        console.log(thisGame);
           res.render("gamePage",{game:thisGame})
      
    });
});
//new Attack post method
router.post("/submitAttack", function(req,res) {
//router.post("/submit", function(req,res) {
//    console.log(req.body.newRoll);
//    res.redirect("/"
//        app.locals.newRoll=req.body;
//    console.log(newRoll);
//        sess=req.session;
//    console.log(req.body);
    
 var newRoll=JSON.parse(req.body.combatOutputJSON);
    console.log(newRoll);
//console.log(sess.newRoll.rawDie);
    res.redirect("/");     
//    createdOn:now  
      

});
function callbackRoll() {
    console.log('here I am');
}
//Export this gold shiny unicorn magic
module.exports = router;