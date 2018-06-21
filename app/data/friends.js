//applications data should be saved in an array here
var friends = [{
  "name": "Carrot Top",
  "photo": "./images/carrotTop600x470.jpg",
  "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}, {
  "name": "Rosie O' Donnel",
  "photo": "./images/rosie700x460.jpg",
  "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
}, {
  "name": "Denzel Washington",
  "photo": "./images/denzel600x400.jpg",
  "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
}, {
  "name": "Morgan Freeman",
  "photo": "./images/morganfreeman800x400.jpg",
  "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
}, {
  "name": "Samuel M.F. Jackson",
  "photo": "./images/SLJ820x460.jpg",
  "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}];
// console.log(friends);

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
