// Create an object, then write a JavaScript function that checks whether an object contains the specified key.


const basketball = {
    team: 'Suns',
    player: 'Devin Booker',
    age: 26
};


function myObject(obj, key) {

    let checkObj = Object.hasOwn(obj, key);

    console.log(checkObj)

}

myObject(basketball, 'team')


// I first created an object with 3 key-value pairs. I then created a function with an object and key as paremeters. I then did research on mozilla api to figure out the 
// appropriate object method to use which was "Object.hasOwn()". This method returns a value of true or false regarding if a specific property/key is included within a 
// given object. I then stored that object method containing the object and key arguments into a variable called "checkObj". i then console log it within the function then
// call the function outside and pass my object that I created and a key that I wanted to check. After running the code, it evaluated to true, which means the property did
// exist within the object. 