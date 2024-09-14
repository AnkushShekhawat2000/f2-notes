// Objects inside array
// very useful in real world application


//  const users = [{}, {}, {}, {}, {}];
const users = [
    {userId: 1, firstName: "Ankush", gender: "male" },
    { userId: 2, firstName: "Priya", gender: "female" },
    { userId: 3, firstName: "Rajesh", gender: "male" },
    { userId: 4, firstName: "Suresh", gender: "male" },
    { userId: 5, firstName: "Priya", gender: "female" },
];


console.log(users);

// how to iterate this user
for(let user of users){
    // console.log(user);
    // console.log(user.userId);
    console.log(`${user.userId} - ${user.firstName} - ${user.gender}`);
}




