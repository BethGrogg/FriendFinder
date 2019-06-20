var tableData = require('../data/friend.js');

module.exports = function (app) {
app.get("/api/friends", function(req, res) {
 //   res.sendFile(path.join(__dirname, "home.html"));
    res.json(tableData);
});

 // app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
 //   var newFriends = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();
  
 //   console.log(newFriends);
    
  
 //   tables.push(newFriends);
  
//    res.json(tableData);
 
};  