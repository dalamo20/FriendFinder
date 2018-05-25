//applications data should be saved in an array here
var friends = [{
    "name":"Carrot Top",
    "photo":"/Users/ypham/Desktop/projects/FriendFinder/app/public/images/carrotTop600x470.jpg",
    "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }, {
    "name":"Rosie O' Donnel",
    "photo":"/Users/ypham/Desktop/projects/FriendFinder/app/public/images/rosie700x460.jpg",
    "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  }, {
    "name":"Denzel Washington",
    "photo":"/Users/ypham/Desktop/projects/FriendFinder/app/public/images/denzel600x400.jpg",
    "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  }, {
    "name":"Morgan Freeman",
    "photo":"/Users/ypham/Desktop/projects/FriendFinder/app/public/images/morganfreeman800x400.jpg",
    "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4] 
  }, {
    "name":"Samuel M.F. Jackson",
    "photo":"/Users/ypham/Desktop/projects/FriendFinder/app/public/images/SLJ820x460.jpg",
    "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  }];
  console.log(friends);

  //after quiz
  var userAnswers = ["", "", "", "", "", "", "", "", "", ""];

  var bestFriend = "";
  var difference = Infinity;
// create own function and insert below
  var answer = 0;

  function generateFriend () {
  for (var i = 0; i < friends.length; i++) {//the potential friends
    for (var j=0; j < userAnswers.length; j++) {
        answer += userAnswers[j] - friends[i].scores[j];
        if (answer < difference) {
            difference = answer;
            bestFriend = friends[i];
        }
    }
  }
}
generateFriend();
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  