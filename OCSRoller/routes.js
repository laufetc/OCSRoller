var express = require("express");
var passport=require("passport")

var User = require("./models/user");
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {                                    
    next();
  } else {
    req.flash("info", "You must be logged in to see this page.");
    res.redirect("/login");
  }
}

router.use(function(req,res,next) {
    res.locals.currentUser=req.user;
    res.locals.errors=req.flash("error");
    res.locals.infos=req.flash("info");
    next();
});

router.get("/", function(req, res, next) {
    User.find()
    .exec(function(err, users) {
        if(err) { return next(err); }
    res.render("index", {users: users });
    });
});

router.get("/login", function(req, res, next) {
    res.render("login");
});

router.post("/login",passport.authenticate("login",{
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true           
}));


router.get("/edit", ensureAuthenticated, function(req, res) {    
  res.render("edit");
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/edit", ensureAuthenticated, function(req, res, next) {  
  req.user.username = req.body.username;
  req.user.save(function(err) {
    if (err) {
      next(err);
return; }
    req.flash("info", "Profile updated!");
    res.redirect("/edit");
  });
});

router.get("/signup", function(req, res, next) {
    res.render("signup");
});

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

router.get("/users/:username",function (req, res, next) {
    User.findOne({ username: req.params.username }, function(err, user) {
        if (err) {return next(err); }
        if(!user) {return next(404); }
        res.render("profile", { user: user});
    });
});



module.exports = router;