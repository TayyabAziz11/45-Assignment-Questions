//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Tayyab", "Qasim", "Umair"];
guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner.")); });
