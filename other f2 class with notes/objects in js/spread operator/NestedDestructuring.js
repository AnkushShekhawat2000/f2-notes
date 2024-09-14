//  Nested destructuring


// jisme se destructuring krna hota toh same type ka data type dusre traf lete h 
//  like :->
//    [] = []
//   {} = {}
//   [{a, b}, {c,d}, , , , seven, eight  ] = [ {a:0, b: 2}, ,{c:0, d: 2},{a:0, b: 2}, 7, 9 ]  
//   [zerIn, , {a}, four] =  [ 1, 3, {a:0, b: 2}, 4, 5]   
//   [zerIn,[one, , four] , {a}, four] =  [ 0,[1, 3,4] {a:0, b: 2}, 4, 5]   

const users = [
    {userId: 1, firstName: "Ankush", gender: "male" },
    { userId: 2, firstName: "Priya", gender: "female" },
    { userId: 3, firstName: "Rajesh", gender: "male" },
    { userId: 4, firstName: "Suresh", gender: "male" },
    { userId: 5, firstName: "Priya", gender: "female" },
];

const [user1, user2, user3] = users;

console.log(user1); // { userId: 1, firstName: 'Ankush', gender: 'male' }


// const [{ firstName}, {gender:gender}] = users;

// console.log(firstName, gender); 


const [{ firstName:user1firstName, userId}, ,{gender:user3gender}] = users;

console.log(user1firstName,userId, user3gender); 


