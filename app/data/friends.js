// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Veronica",
    photo: "https://vignette.wikia.nocookie.net/disney/images/c/ca/Snow_white_transparent.png/revision/latest?cb=20151111070659",
    scores: [
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5"    
    ]
  },

    {
    name: "George",
    photo: "https://vignette.wikia.nocookie.net/disney/images/c/ca/Snow_white_transparent.png/revision/latest?cb=20151111070659",
    scores: [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"    
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
