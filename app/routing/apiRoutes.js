//Display two routes: 
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic

var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // console.log(req.body);
    var userAnswers = req.body;
    //after quiz
    var bestFriend;
    var difference = Infinity;
    // create own function and insert below

    friends.forEach(friend => {
      var answer = 0;
      for (var i = 0; i < userAnswers.scores.length; i++) {

        var compare = Math.abs(userAnswers.scores[i] - friend.scores[i]);
        answer += compare
      }
      if (answer < difference) {
        difference = answer;
        bestFriend = friend
      }
      console.log(bestFriend);
    });

    friends.push(userAnswers);
    res.json(bestFriend);
  });
};


