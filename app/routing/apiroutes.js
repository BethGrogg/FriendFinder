var tableData = require('../data/friend.js');

module.exports = function (app) {
app.get("/api/friends", function(req, res) {
 //   res.sendFile(path.join(__dirname, "home.html"));
    res.json(tableData);
});

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
 //   var newFriends = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();
  
    tableData.push(req.body);
  
    console.log(tableData);
    console.log(req.body.scores[0]);

    var newArray = [];

    for (i = 0; i < 10; i++) {

      var newScore = parseInt(tableData[0].scores[i]);
      
      newArray.push(newScore);
       
    }
    
    var j = tableData.length - 1;
   
    var friendsArray = [];
    var nameArray = [];

    
   
    for (i = 0; i < (tableData.length - 1); i++) {
      var newAnswer = 0;
      var name = "";
      for (k = 0; k < 10; k++) {
         
         console.log("currentUser: " + tableData[j].scores[k]);
         console.log("otherFriends: " + tableData[i].scores[k]);
        var answer = Math.abs(tableData[j].scores[k] - tableData[i].scores[k]);
        newAnswer += answer;
        name = tableData[i].name;

        
      }
      
      console.log("newAnswer: " + newAnswer);
      console.log("name: " + name);
      nameArray.push(name);
      friendsArray.push(newAnswer);
      console.log('nameArray: ' + nameArray);
      console.log('friendsArray: ' + friendsArray);
      Array.prototype.associate = function (keys) {
         var result = {};
       
         this.forEach(function (el, i) {
           result[keys[i]] = el;
         });
       
         return result;
       };
       
       var associateArray = nameArray.associate(friendsArray);
       console.log(nameArray.associate(friendsArray));
       console.log(Object.values(associateArray)[0]);

       for (i = 0; i < tableData.length; i++) {
console.log("hi: " + tableData[i].name);
         if (tableData[i].name === Object.values(associateArray)[0]) {
            console.log("in here");
            console.log(tableData[i].photo);
         }
       }
    }

    
//     var firstArray = friendsArray;
//     console.log("firstArray: " + firstArray);
//     var newSort = firstArray.sort(function(a, b){return a - b});
//  //   console.log("newSort: " + newSort);
//     console.log("firstArray: " + firstArray);
//     console.log('friendsArray: ' + friendsArray);
//     for (i = 0; i < friendsArray.length; i++) {

//       if (friendsArray[i] === newSort[0]) {
//          console.log(i);
//          console.log("name: " + nameArray[i]);
//          console.log("score: " + friendsArray[i]);
//       }
//    }
    

    //    res.json(tableData);
    res.redirect(req.originalUrl);
});


};  
