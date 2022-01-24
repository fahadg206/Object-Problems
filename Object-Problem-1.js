// Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

// Your JavaScript function should take in two parameters, the object and the key/property you want to delete.


function deleteProperty(obj , key) {


    delete obj[key]
    return obj


}

let workout = {

    push: 'chest',
    pull: 'biceps'

};

console.log(deleteProperty(workout, 'push'))


// I first created a function called "deleteProperty" and gave it parameters of obj & key like instructed. I then looked at my notes to figure out to delete a property/key, and
// told my function to delete the key from my object. I then asked my function to return my object after deleting the key from the object. I then created a simple object containing
// two key-value pairs outside of my function. I then console logged my function and asked it to select my object "workout", and delete my key "push" and give me the updated
// object. My code ended up working. 