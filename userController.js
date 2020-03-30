// Import contact model
let User = require('../models/userModel');
let userList = [];

exports.userList = function (req, res) {
    res.render('userList.ejs',{message: '', users:userList}); 
 };

 exports.userAdd =  function (req, res) {
    res.render('userAdd.ejs');
 }

 exports.userSave = function (req, res) {
    let user =  new User(req.body.lastname, req.body.firstname );
    userList.push(user);
    console.log(userList);
    
    res.render('userList.ejs',{message : 'user created', users: userList});
};

exports.userUpdate = function (req, res) {
    let position = req.body.iduser;
    user.lastname =  req.body.lastname;
    user.firstname =  req.body.firstname;
    res.redirect('/user');
};

exports.userRemove = function (req, res) {
    userList.splice(req.body.iduser,1);
    res.redirect('/user');
 };