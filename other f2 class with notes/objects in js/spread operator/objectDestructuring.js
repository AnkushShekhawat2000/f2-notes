//  Object destructuring
// jis name se key hote h usi name se variable bnanae padte h

const band = {
    bandName: "lead zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir"
}

// let bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName);  // lead zepplin
// console.log(famousSong); // stairway to heaven

// bandName = "queen";
// // famousSong = "runway"  // yeh rror dega kuki const ko change nahi kr sakhte

// console.log(bandName);  // queen
// console.log(famousSong); // stairway to heaven



//destructuring se ham easy way me variable ki value assign kr sakte h
// 4 line ka code i line me


// const {bandName, var3} = band;
// jis name se object me key hoti usi naam se variable define krne padte h warna to hme undefined milta h
// const {bandName, famousSong} = band;
// bandName = "queen";  // getting error because bandName is const var
// console.log(bandName);  // lead zepplin
// console.log(var3);   // undefined
// console.log(famousSong); // stairway to heaven



// let {bandName: var1, famousSong: var2} = band;
// console.log(var1);
// console.log(bandName);


//  rest keys ka hme alag obj chaye
let {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(famousSong);

console.log(restProps); // { year: 1968, anotherFamousSong: 'Kashmir' }