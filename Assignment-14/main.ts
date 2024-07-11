//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guest : string[] = ["Tayyab" , "Qasim" , "Umair"]

guest.map((items)=> console.log(`Dear ${items}, you are invited to the dinner.`))