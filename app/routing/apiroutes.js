var tableData = require('../data/friend.js');

module.exports = function (app) {
   app.get("/api/friends", function (req, res) {

      res.json(tableData);
   });

   app.post("/api/friends", function (req, res) {


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

            var answer = Math.abs(tableData[j].scores[k] - tableData[i].scores[k]);
            newAnswer += answer;
            name = tableData[i].name;


         }

         nameArray.push(name);
         friendsArray.push(newAnswer);

      }


      var bestFriend = [];
      for (i = 0; i < friendsArray.length; i++) {
         var firstArray = friendsArray;

         var newSort = firstArray.slice().sort(function (a, b) {
            return a - b
         });


         if (friendsArray[i] === newSort[0]) {

            for (j = 0; j < tableData.length; j++) {
               if (tableData[j].name === nameArray[i]) {

                  bestFriend = tableData[j];



               }
            }
         }
      };
      res.json(bestFriend);

   });


};