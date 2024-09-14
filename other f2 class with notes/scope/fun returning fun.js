// function returning function

function myFunc(){
    // return [1,2,3];

    function hello(){
        console.log("hello world");
        return "hello msg";
    }

    return hello;
}


const ans = myFunc();
console.log(ans);

const ret = ans();
console.log(ret);