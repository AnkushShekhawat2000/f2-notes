//  In array how spread op work rev

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1];
console.log(newArray);  //  [1, 2, 3]

// woring  :->
    //   phle ek kahli array bnega => []
    //   phir usme [...arry1] 
    //   ...array1  se ek ek value ayege or [1,2,3] me store ho jayege 

  
// ayah array1 ki value copy hokr a rahe h or array2 directly as a reference a raha h 
// isley esko bhi hmey sprea   
const newArray1 = [...array1, array2];
console.log(newArray1);    // [1, 2, 3, [5,6,7]]

    // array1.push(8);
    // array2.push(0);
    // console.log(newArray1);   // // [1, 2, 3, [5,6,7, 0]]

// isley esko bhi hmey spread operator se store krenge
// ab changes bhi reflect nahi krenge kuki dono array ki value copy hokr a rahi h
// agr ham kisi me changes krege to hmare newArray2 effect nahi hoga kuki hmne 
// kuki hmare valus copy hokr a rahe as a reference nahi a rahe h
const newArray2 = [...array1, ...array2];
console.log(newArray2);    // [1, 2, 3, 5,6,7]

    // array1.push(8);
    // array2.push(0);
    // console.log(newArray2);    // [1, 2, 3, 5,6,7]


    //  ham array me string bhi spread kr sakte h
const newArray3 = [..."abc"];
console.log(newArray3);

// const newArray4 = [...123456789];
// te hme error dega kuki number iterable nahi h
//string iterable h

const newArray4 = [..."123456789"];
console.log(newArray4);



//////////////////////////////////////////////
//                                          //
        //  spread operator in Objects
//                                          //
//////////////////////////////////////////////


const objj1 = {
    key1 : "value1",
    key2 : "value2"
}

console.log(objj1);

// Obj me key hmesha ek hi a sakte h 
//  agr ham 2 same key se object me store bhi krte h toh lat wali key ki value phle wali key ki value ko override kr dege 
const objj2 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value59"
}

console.log(objj2);


// hamrae pass 2 object 
// isse ek object bnanan h
// means clone krne h obj

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key1: "valueUnique",  // ayay kuch nahi tha second step me value add ki
    key3 : "value3",
    key4 : "value4"
}


// const newObj = {...obj1};
// console.log(newObj);   //{key1: 'value1', key2: 'value2'}

const newObj = {...obj1, ...obj2};
console.log(newObj);   //{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}


// second step agr obj me   key1: "valueUnique",  add krne pr 
// newObj me key1 ki value obj2 ki key1 se oveerride ho jyege 
// kuki ek obj me ek hi unque key rah sakhte h
// obj2 bad me copy ho raha h esley ye wale obj vvalue ovverride krega

// {key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4'}


// order change krne pr
// ab key1 ki value obj1 override krega kuki wo bad me copy ho raha h
    const newObjO = {...obj2, ...obj1};
    console.log(newObjO);  // {key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2'}


// clone new object by add more key
    const newObject = {...obj1, ...obj2, key69: "value69"};
    console.log(newObject); // {key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4', key69: 'value69'}


    