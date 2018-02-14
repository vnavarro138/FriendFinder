// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../app/data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var currentFriend = req.body;
    var currentScore = currentFriend["scores[]"];
    var match = {name:"",photo:"",difference:Infinity};
    console.log(currentScore);
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    var differenceScores;
    for (var i=0; i<friendsData.length; i++){
   var friendsInfo = friendsData[i];
   differenceScores = 0;
//loop through all scores (total of 10 questions)
   for (var j=0; j<9; j++){
  var friendsScores = parseInt(friendsInfo.scores[j]);
  var currentUserScore = parseInt(currentScore[j]);
  differenceScores += Math.abs(friendsScores - currentUserScore);
   console.log(differenceScores);
   }

   if (differenceScores<match.difference){
      match.name = friendsInfo.name;
      match.photo = friendsInfo.photo;
      match.difference = differenceScores;
 }

}
    res.json (match)
    
  });

//take current friend who just submitted score compare their score to all friends in friends array

//take the smallest difference and match them to that friend

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
};
